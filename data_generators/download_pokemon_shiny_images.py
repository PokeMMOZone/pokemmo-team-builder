import requests
import os

POKEMON_BASE_URL = "https://pokeapi.co/api/v2/pokemon/"
POKEMON_SPECIES_URL = "https://pokeapi.co/api/v2/pokemon-species/"
IMAGE_SAVE_PATH = "./src/img/shiny/"

def download_image(image_url, index):
    image_response = requests.get(image_url)
    if image_response.status_code == 200:
        image_path = os.path.join(IMAGE_SAVE_PATH, str(index).zfill(3) + ".png")
        with open(image_path, 'wb') as file:
            file.write(image_response.content)

def main():
    # Ensure the directory exists
    if not os.path.exists(IMAGE_SAVE_PATH):
        os.makedirs(IMAGE_SAVE_PATH)

    # Get the total count of Pokémon
    response = requests.get(POKEMON_BASE_URL)
    total_count = response.json()['count']

    # Loop through all Pokémon species
    for i in range(1, total_count + 1):
        species_response = requests.get(POKEMON_SPECIES_URL + str(i))
        if species_response.status_code == 200:
            species_data = species_response.json()

            # Loop through all varieties of the Pokémon species
            for variety in species_data['varieties']:
                pokemon_id = variety['pokemon']['url'].split('/')[-2]  # Extract ID from URL
                pokemon_response = requests.get(POKEMON_BASE_URL + pokemon_id)
                if pokemon_response.status_code == 200:
                    pokemon_data = pokemon_response.json()
                    image_url = pokemon_data['sprites']['front_shiny']
                    if image_url:
                        download_image(image_url, pokemon_id)

if __name__ == "__main__":
    main()
