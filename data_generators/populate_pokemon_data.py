import requests
import json

BASE_URL = "https://pokeapi.co/api/v2/pokemon/"
SPECIES_URL = "https://pokeapi.co/api/v2/pokemon-species/"
OUTPUT_PATH = "./src/data/pokemon.js"

def fetch_pokemon_data(pokemon_id):
    response = requests.get(BASE_URL + str(pokemon_id))
    if response.status_code == 200:
        data = response.json()
        pokemon_data = {
            "id": str(data['id']).zfill(3),
            "name": data['name'].capitalize(),
            "type": [t['type']['name'].capitalize() for t in data['types']],
            "baseStats": {
                "hp": data['stats'][0]['base_stat'],
                "attack": data['stats'][1]['base_stat'],
                "defense": data['stats'][2]['base_stat'],
                "specialAttack": data['stats'][3]['base_stat'],
                "specialDefense": data['stats'][4]['base_stat'],
                "speed": data['stats'][5]['base_stat']
            }
        }
        return pokemon_data
    return None

def fetch_varieties(pokemon_id):
    response = requests.get(SPECIES_URL + str(pokemon_id))
    varieties = []
    if response.status_code == 200:
        species_data = response.json()
        for variety in species_data['varieties']:
            variety_id = int(variety['pokemon']['url'].split('/')[-2])
            variety_data = fetch_pokemon_data(variety_id)
            if variety_data:
                varieties.append(variety_data)
    return varieties

def main():
    pokemon_list = [{
        "id": '000',
        "name": 'Select a Pokémon',
        "type": ['None'],
        "baseStats": {
            "hp": 0,
            "attack": 0,
            "defense": 0,
            "specialAttack": 0,
            "specialDefense": 0,
            "speed": 0
        }
    }]

    # Fetching the total count of Pokémon
    response = requests.get(BASE_URL)
    total_count = response.json()['count']

    for i in range(1, total_count + 1):
        varieties = fetch_varieties(i)
        pokemon_list.extend(varieties)

    with open(OUTPUT_PATH, 'w') as file:
        file.write("const pokemonData = " + json.dumps(pokemon_list, indent=4) + ";")

if __name__ == "__main__":
    main()
