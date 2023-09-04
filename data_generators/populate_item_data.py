import requests
import json

ITEM_URL = "https://pokeapi.co/api/v2/item/"
OUTPUT_PATH = "./src/data/items.js"

def fetch_english_name(item_data):
    for name_entry in item_data["names"]:
        if name_entry["language"]["name"] == "en":
            return name_entry["name"]
    return None

def fetch_item_description(item_url):
    response = requests.get(item_url)
    if response.status_code == 200:
        item_data = response.json()
        
        # Extract flavor text in English
        for entry in item_data["flavor_text_entries"]:
            if entry["language"]["name"] == "en" and entry["version_group"]["name"] == "x-y":
                return entry["text"]
    return None

def fetch_item_data(item_id_or_name):
    response = requests.get(ITEM_URL + str(item_id_or_name))
    if response.status_code == 200:
        data = response.json()
        
        # Check if item can be held by a pokemon
        if not data['held_by_pokemon']:
            return None

        english_name = fetch_english_name(data)
        
        item_data = {
            "id": str(data['id']).zfill(3),
            "name": english_name if english_name else data['name'],
            "description": fetch_item_description(ITEM_URL + str(item_id_or_name))
        }
        return item_data
    return None

def main():
    items_list = [{
        "id": '000',
        "name": 'Select an Item',
        "description": "No description"
    }]

    # Fetching the total count of Items
    response = requests.get(ITEM_URL)
    total_count = response.json()['count']

    for i in range(1, total_count + 1):
        item_data = fetch_item_data(i)
        if item_data:  # If the item can be held by a pokemon
            items_list.append(item_data)

    with open(OUTPUT_PATH, 'w') as file:
        file.write("const itemsData = " + json.dumps(items_list, indent=4) + ";")

if __name__ == "__main__":
    main()
