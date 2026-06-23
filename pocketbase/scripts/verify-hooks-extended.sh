#!/usr/bin/env bash
# GHST-12 — extended verification: complete, cancel, review validation
set -euo pipefail
BASE="${POCKETBASE_BASE:-https://pocket.lif3line.me}"
API="${BASE}/api"
SEED_PASSWORD="${LIF3LINE_SEED_PASSWORD:?Set LIF3LINE_SEED_PASSWORD before running this script}"
SEED_CUSTOMER_EMAIL="${LIF3LINE_SEED_CUSTOMER_EMAIL:-robert.anderson@seed.lif3line.ca}"
SEED_PROVIDER_EMAIL="${LIF3LINE_SEED_PROVIDER_EMAIL:-hendry.thompson@seed.lif3line.ca}"

AUTH=$(curl -s -X POST "$API/collections/users/auth-with-password" \
  -H "Content-Type: application/json" \
  -d "{\"identity\":\"${SEED_CUSTOMER_EMAIL}\",\"password\":\"${SEED_PASSWORD}\"}")
TOKEN=$(echo "$AUTH" | python3 -c "import sys,json; print(json.load(sys.stdin)['token'])")
USER_ID=$(echo "$AUTH" | python3 -c "import sys,json; print(json.load(sys.stdin)['record']['id'])")
CITY=$(curl -s "$API/collections/cities/records?perPage=1" | python3 -c "import sys,json; print(json.load(sys.stdin)['items'][0]['id'])")

PAUTH=$(curl -s -X POST "$API/collections/users/auth-with-password" \
  -H "Content-Type: application/json" \
  -d "{\"identity\":\"${SEED_PROVIDER_EMAIL}\",\"password\":\"${SEED_PASSWORD}\"}")
PTOKEN=$(echo "$PAUTH" | python3 -c "import sys,json; print(json.load(sys.stdin)['token'])")
PUSER=$(echo "$PAUTH" | python3 -c "import sys,json; print(json.load(sys.stdin)['record']['id'])")
PROVIDER=$(curl -s "$API/collections/provider_profiles/records?filter=(user='${PUSER}')" \
  -H "Authorization: ${PTOKEN}" | python3 -c "import sys,json; print(json.load(sys.stdin)['items'][0]['id'])")

REQ=$(curl -s -X POST "$API/collections/service_requests/records" \
  -H "Authorization: ${TOKEN}" \
  -H "Content-Type: application/json" \
  -d "{\"title\":\"GHST12 extended test\",\"description\":\"test\",\"customer\":\"${USER_ID}\",\"city\":\"${CITY}\",\"status\":\"open\"}")
REQ_ID=$(echo "$REQ" | python3 -c "import sys,json; print(json.load(sys.stdin)['id'])")

QUOTE=$(curl -s -X POST "$API/collections/quotes/records" \
  -H "Authorization: ${PTOKEN}" \
  -H "Content-Type: application/json" \
  -d "{\"request\":\"${REQ_ID}\",\"provider\":\"${PROVIDER}\",\"amount\":100,\"status\":\"pending\"}")
QUOTE_ID=$(echo "$QUOTE" | python3 -c "import sys,json; print(json.load(sys.stdin)['id'])")

echo "=== accept-quote ==="
curl -s -w "\nHTTP:%{http_code}\n" -X POST "${BASE}/lif3line/accept-quote" \
  -H "Authorization: ${TOKEN}" \
  -H "Content-Type: application/json" \
  -d "{\"quoteId\":\"${QUOTE_ID}\"}"

echo "=== review before complete (expect 400) ==="
curl -s -w "\nHTTP:%{http_code}\n" -X POST "${API}/collections/reviews/records" \
  -H "Authorization: ${TOKEN}" \
  -H "Content-Type: application/json" \
  -d "{\"request\":\"${REQ_ID}\",\"rating\":5,\"comment\":\"early\"}"

echo "=== complete-request (expect 200) ==="
curl -s -w "\nHTTP:%{http_code}\n" -X POST "${BASE}/lif3line/complete-request" \
  -H "Authorization: ${TOKEN}" \
  -H "Content-Type: application/json" \
  -d "{\"requestId\":\"${REQ_ID}\"}"

echo "=== review after complete (expect 200) ==="
curl -s -w "\nHTTP:%{http_code}\n" -X POST "${API}/collections/reviews/records" \
  -H "Authorization: ${TOKEN}" \
  -H "Content-Type: application/json" \
  -d "{\"request\":\"${REQ_ID}\",\"rating\":5,\"comment\":\"great\"}"

REQ2=$(curl -s -X POST "$API/collections/service_requests/records" \
  -H "Authorization: ${TOKEN}" \
  -H "Content-Type: application/json" \
  -d "{\"title\":\"GHST12 cancel test\",\"description\":\"test\",\"customer\":\"${USER_ID}\",\"city\":\"${CITY}\",\"status\":\"open\"}")
REQ2_ID=$(echo "$REQ2" | python3 -c "import sys,json; print(json.load(sys.stdin)['id'])")

curl -s -X POST "$API/collections/quotes/records" \
  -H "Authorization: ${PTOKEN}" \
  -H "Content-Type: application/json" \
  -d "{\"request\":\"${REQ2_ID}\",\"provider\":\"${PROVIDER}\",\"amount\":50,\"status\":\"pending\"}" >/dev/null

echo "=== cancel-request (expect 200) ==="
curl -s -w "\nHTTP:%{http_code}\n" -X POST "${BASE}/lif3line/cancel-request" \
  -H "Authorization: ${TOKEN}" \
  -H "Content-Type: application/json" \
  -d "{\"requestId\":\"${REQ2_ID}\"}"

echo "Done extended."
