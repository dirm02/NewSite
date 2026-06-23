#!/usr/bin/env bash
set -euo pipefail
SEED_PASSWORD="${LIF3LINE_SEED_PASSWORD:?Set LIF3LINE_SEED_PASSWORD before running this script}"
SEED_CUSTOMER_EMAIL="${LIF3LINE_SEED_CUSTOMER_EMAIL:-robert.anderson@seed.lif3line.ca}"
TOKEN=$(curl -s -X POST https://pocket.lif3line.me/api/collections/users/auth-with-password \
  -H "Content-Type: application/json" \
  -d "{\"identity\":\"${SEED_CUSTOMER_EMAIL}\",\"password\":\"${SEED_PASSWORD}\"}" \
  | python3 -c "import sys,json; print(json.load(sys.stdin)['token'])")
curl -s -w "\nHTTP:%{http_code}\n" -X POST https://pocket.lif3line.me/lif3line/accept-quote \
  -H "Authorization: ${TOKEN}" \
  -H "Content-Type: application/json" \
  -d '{"quoteId":"8tpddjp5z630yg1"}'
