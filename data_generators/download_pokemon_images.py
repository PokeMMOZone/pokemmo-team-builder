import requests
import os

POKEMON_BASE_URL = "https://pokeapi.co/api/v2/pokemon/"
FORM_BASE_URL = "https://pokeapi.co/api/v2/pokemon-form/"
IMAGE_SAVE_PATH = "./src/img/pokemon/"

def download_image(image_url, index):
    image_response = requests.get(image_url)
    if image_response.status_code == 200:
        image_path = os.path.join(IMAGE_SAVE_PATH, str(index).zfill(3) + ".png")
        with open(image_path, 'wb') as file:
            file.write(image_response.content)

def download_form_images(pokemon_id):
    response = requests.get(FORM_BASE_URL + str(pokemon_id))
    if response.status_code == 200:
        form_data = response.json()
        form_id = form_data['id']
        image_url = form_data['sprites']['front_default']
        download_image(image_url, form_id)

def main():
    # Ensure the directory exists
    if not os.path.exists(IMAGE_SAVE_PATH):
        os.makedirs(IMAGE_SAVE_PATH)

    for i in range(1, 650):  # Assuming 649 Pokémon for gens 1-5
        response = requests.get(POKEMON_BASE_URL + str(i))
        if response.status_code == 200:
            data = response.json()
            image_url = data['sprites']['front_default']
            download_image(image_url, i)

        # Download form images
        download_form_images(i)

if __name__ == "__main__":
    main()
