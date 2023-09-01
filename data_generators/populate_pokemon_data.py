import requests
import json

BASE_URL = "https://pokeapi.co/api/v2/pokemon/"
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

def fetch_forms_data(pokemon_id, index):
    forms_data = []
    response = requests.get(BASE_URL + str(pokemon_id) + "/forms")
    if response.status_code == 200:
        forms = response.json()
        for form in forms:
            form_data = {
                "id": str(index).zfill(3),
                "name": form['name'].capitalize(),
                "type": [t['type']['name'].capitalize() for t in form['types']],
                "baseStats": {
                    "hp": form['stats'][0]['base_stat'],
                    "attack": form['stats'][1]['base_stat'],
                    "defense": form['stats'][2]['base_stat'],
                    "specialAttack": form['stats'][3]['base_stat'],
                    "specialDefense": form['stats'][4]['base_stat'],
                    "speed": form['stats'][5]['base_stat']
                }
            }
            forms_data.append(form_data)
            index += 1
    return forms_data, index

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

    index = 1
    for i in range(1, 650):  # Assuming 649 Pokémon for gens 1-5
        data = fetch_pokemon_data(i)
        if data:
            pokemon_list.append(data)
            index += 1

        forms, index = fetch_forms_data(i, index)
        pokemon_list.extend(forms)

    with open(OUTPUT_PATH, 'w') as file:
        file.write("const pokemonData = " + json.dumps(pokemon_list, indent=4) + ";")

if __name__ == "__main__":
    main()
