#!/usr/bin/env bash
# GHST-12 — verify Lif3line PocketBase hooks (run on VM or against pocket.lif3line.me)
set -euo pipefail
BASE="${POCKETBASE_BASE:-https://pocket.lif3line.me}"
API="${BASE}/api"
SEED_PASSWORD="${LIF3LINE_SEED_PASSWORD:?Set LIF3LINE_SEED_PASSWORD before running this script}"
SEED_CUSTOMER_EMAIL="${LIF3LINE_SEED_CUSTOMER_EMAIL:-robert.anderson@seed.lif3line.ca}"
SEED_PROVIDER_EMAIL="${LIF3LINE_SEED_PROVIDER_EMAIL:-hendry.thompson@seed.lif3line.ca}"

echo "=== 1. accept-quote without auth (expect 401) ==="
curl -s -w "\nHTTP:%{http_code}\n" -X POST "${BASE}/lif3line/accept-quote" \
  -H "Content-Type: application/json" \
  -d '{"quoteId":"test"}'

echo "=== 2. admin signup blocked (expect 403) ==="
curl -s -w "\nHTTP:%{http_code}\n" -X POST "${API}/collections/users/records" \
  -H "Content-Type: application/json" \
  -d "{\"email\":\"ghst12-admin-block@test.lif3line.ca\",\"password\":\"${SEED_PASSWORD}\",\"passwordConfirm\":\"${SEED_PASSWORD}\",\"role\":\"admin\"}"

echo "=== 3. customer login ==="
AUTH=$(curl -s -X POST "${API}/collections/users/auth-with-password" \
  -H "Content-Type: application/json" \
  -d "{\"identity\":\"${SEED_CUSTOMER_EMAIL}\",\"password\":\"${SEED_PASSWORD}\"}")
TOKEN=$(echo "$AUTH" | python3 -c "import sys,json; print(json.load(sys.stdin).get('token',''))")
USER_ID=$(echo "$AUTH" | python3 -c "import sys,json; print(json.load(sys.stdin)['record']['id'])")
echo "token ok: $([ -n "$TOKEN" ] && echo yes || echo no)"

echo "=== 4. create open request ==="
CITY=$(curl -s "${API}/collections/cities/records?perPage=1" | python3 -c "import sys,json; print(json.load(sys.stdin)['items'][0]['id'])")
REQ=$(curl -s -X POST "${API}/collections/service_requests/records" \
  -H "Authorization: ${TOKEN}" \
  -H "Content-Type: application/json" \
  -d "{\"title\":\"GHST12 hook test\",\"description\":\"test\",\"customer\":\"${USER_ID}\",\"city\":\"${CITY}\",\"status\":\"open\"}")
REQ_ID=$(echo "$REQ" | python3 -c "import sys,json; print(json.load(sys.stdin).get('id',''))")
echo "request id: ${REQ_ID}"

echo "=== 5. provider login + quote ==="
PAUTH=$(curl -s -X POST "${API}/collections/users/auth-with-password" \
  -H "Content-Type: application/json" \
  -d "{\"identity\":\"${SEED_PROVIDER_EMAIL}\",\"password\":\"${SEED_PASSWORD}\"}")
PTOKEN=$(echo "$PAUTH" | python3 -c "import sys,json; print(json.load(sys.stdin).get('token',''))")
PUSER=$(echo "$PAUTH" | python3 -c "import sys,json; print(json.load(sys.stdin)['record']['id'])")
PROVIDER=$(curl -s "${API}/collections/provider_profiles/records?filter=(user='${PUSER}')" \
  -H "Authorization: ${PTOKEN}" | python3 -c "import sys,json; d=json.load(sys.stdin); print(d['items'][0]['id'] if d.get('items') else '')")
QUOTE=$(curl -s -X POST "${API}/collections/quotes/records" \
  -H "Authorization: ${PTOKEN}" \
  -H "Content-Type: application/json" \
  -d "{\"request\":\"${REQ_ID}\",\"provider\":\"${PROVIDER}\",\"amount\":250,\"status\":\"pending\"}")
QUOTE_ID=$(echo "$QUOTE" | python3 -c "import sys,json; print(json.load(sys.stdin).get('id',''))")
echo "quote id: ${QUOTE_ID}"

echo "=== 6. accept-quote (expect 200) ==="
curl -s -w "\nHTTP:%{http_code}\n" -X POST "${BASE}/lif3line/accept-quote" \
  -H "Authorization: ${TOKEN}" \
  -H "Content-Type: application/json" \
  -d "{\"quoteId\":\"${QUOTE_ID}\"}"

echo "=== 7. direct status PATCH blocked (expect 403) ==="
curl -s -w "\nHTTP:%{http_code}\n" -X PATCH "${API}/collections/service_requests/records/${REQ_ID}" \
  -H "Authorization: ${TOKEN}" \
  -H "Content-Type: application/json" \
  -d '{"status":"completed"}'

echo "Done."
