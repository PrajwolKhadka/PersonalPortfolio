import json
import requests
import time

with open("../data/portfolio.json", "r", encoding="utf-8") as f:
    portfolio = json.load(f)

for idx, item in enumerate(portfolio):
    text = item["content"]
    
    # Call Jina AI embedding API (NO API KEY NEEDED!)
    response = requests.post(
        "https://api.jina.ai/v1/embeddings",
        json={
            "input": [text],
            "model": "jina-embeddings-v2-base-en"
        },
        headers={
            "Content-Type": "application/json"
        }
    )
    
    # Check for errors
    if response.status_code != 200:
        print(f"❌ Error on item {idx + 1}: {response.status_code}")
        print(f"Response: {response.text}")
        print(f"Failed on: {item['title']}")
        break
    
    # Extract embedding from response
    response_data = response.json()
    embedding = response_data["data"][0]["embedding"]
    item["embeddings"] = embedding
    
    print(f"✓ [{idx + 1}/{len(portfolio)}] Generated embedding for: {item['title']}")
    
    # Small delay to be nice to the API
    time.sleep(0.3)

with open("../data/portfolio.json", "w", encoding="utf-8") as f:
    json.dump(portfolio, f, ensure_ascii=False, indent=2)

print("✅ All embeddings regenerated with Jina AI!")