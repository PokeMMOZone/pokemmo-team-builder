import requests
import os

BASE_URL = "https://pokeapi.co/api/v2/pokemon/"
IMAGE_SAVE_PATH = "./src/img/pokemon/"

def download_image(image_url, index):
    image_response = requests.get(image_url)
    if image_response.status_code == 200:
        image_path = os.path.join(IMAGE_SAVE_PATH, str(index).zfill(3) + ".png")
        with open(image_path, 'wb') as file:
            file.write(image_response.content)

def download_form_images(pokemon_id, index):
    response = requests.get(BASE_URL + str(pokemon_id) + "/forms")
    if response.status_code == 200:
        forms = response.json()
        for form in forms:
            image_url = form['sprites']['front_default']
            download_image(image_url, index)
            index += 1
    return index

def main():
    # Ensure the directory exists
    if not os.path.exists(IMAGE_SAVE_PATH):
        os.makedirs(IMAGE_SAVE_PATH)

    index = 1
    for i in range(1, 650):  # Assuming 649 Pokémon for gens 1-5
        response = requests.get(BASE_URL + str(i))
        if response.status_code == 200:
            data = response.json()
            image_url = data['sprites']['front_default']
            download_image(image_url, index)
            index += 1

        # Download form images
        index = download_form_images(i, index)

if __name__ == "__main__":
    main()
