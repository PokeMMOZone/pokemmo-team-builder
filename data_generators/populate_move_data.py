import requests
import json

MOVE_URL = "https://pokeapi.co/api/v2/move/"
OUTPUT_PATH = "./src/data/moves.js"

def fetch_english_name(move_data):
    for name_entry in move_data["names"]:
        if name_entry["language"]["name"] == "en":
            return name_entry["name"]
    return None

def fetch_english_description(move_data):
    for entry in move_data["flavor_text_entries"]:
        if entry["language"]["name"] == "en" and entry["version_group"]["name"] == "x-y":
            return entry["flavor_text"]
    return None

def fetch_move_data(move_id_or_name):
    response = requests.get(MOVE_URL + str(move_id_or_name))
    if response.status_code == 200:
        data = response.json()
        
        move_data = {
            "id": str(data['id']).zfill(3),
            "name": fetch_english_name(data) or data['name'],
            "description": fetch_english_description(data) or "Description not available",
            "type": data["type"]["name"].capitalize(),
            "category": data["damage_class"]["name"].capitalize(),
            "power": data["power"],
            "accuracy": data["accuracy"],
            "pp": data["pp"]
        }
        return move_data
    return None

def main():
    moves_list = []

    # Fetching the total count of Moves
    response = requests.get(MOVE_URL)
    total_count = response.json()['count']

    for i in range(1, total_count + 1):
        move_data = fetch_move_data(i)
        if move_data:  
            moves_list.append(move_data)

    with open(OUTPUT_PATH, 'w') as file:
        file.write("const movesData = " + json.dumps(moves_list, indent=4) + ";")

if __name__ == "__main__":
    main()
