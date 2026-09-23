import json
import os
import requests
import time
from dotenv import load_dotenv

load_dotenv()

JINA_API_KEY = os.environ.get("JINA_API_KEY", "")
if not JINA_API_KEY:
    raise SystemExit(
        "❌ JINA_API_KEY is not set. Get a free key at https://jina.ai/api-dashboard/key-manager "
        "and add JINA_API_KEY=... to your .env file."
    )

# Resolve relative to this script's own location, not the caller's
# current working directory.
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PORTFOLIO_PATH = os.path.join(SCRIPT_DIR, "..", "data", "portfolio.json")

with open(PORTFOLIO_PATH, "r", encoding="utf-8") as f:
    portfolio = json.load(f)

for idx, item in enumerate(portfolio):
    text = item["content"]

    response = requests.post(
        "https://api.jina.ai/v1/embeddings",
        json={
            "input": [text],
            "model": "jina-embeddings-v2-base-en"
        },
        headers={
            "Content-Type": "application/json",
            "Authorization": f"Bearer {JINA_API_KEY}"
        }
    )

    if response.status_code != 200:
        print(f"❌ Error on item {idx + 1}: {response.status_code}")
        print(f"Response: {response.text}")
        print(f"Failed on: {item['title']}")
        break

    response_data = response.json()
    embedding = response_data["data"][0]["embedding"]
    item["embeddings"] = embedding

    print(f"✓ [{idx + 1}/{len(portfolio)}] Generated embedding for: {item['title']}")

    time.sleep(0.3)

with open(PORTFOLIO_PATH, "w", encoding="utf-8") as f:
    json.dump(portfolio, f, ensure_ascii=False, indent=2)

print("✅ All embeddings regenerated with Jina AI!")