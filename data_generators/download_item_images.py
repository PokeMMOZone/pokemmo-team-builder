import requests
import os

ITEM_BASE_URL = "https://pokeapi.co/api/v2/item/"
IMAGE_SAVE_PATH = "./src/img/items/"

def download_image(image_url, index):
    try:
        image_response = requests.get(image_url)
        if image_response.status_code == 200:
            image_path = os.path.join(IMAGE_SAVE_PATH, str(index).zfill(3) + ".png")
            with open(image_path, 'wb') as file:
                file.write(image_response.content)
    except requests.RequestException as e:
        print(f"Failed to download image for item {index}. Error: {e}")

def main():
    # Ensure the directory exists
    if not os.path.exists(IMAGE_SAVE_PATH):
        os.makedirs(IMAGE_SAVE_PATH)

    # Get the total count of Pokémon items
    response = requests.get(ITEM_BASE_URL)
    total_count = response.json()['count']

    # Loop through all Pokémon items
    for i in range(1, total_count + 1):
        item_response = requests.get(ITEM_BASE_URL + str(i))
        if item_response.status_code == 200:
            item_data = item_response.json()
            image_url = item_data['sprites']['default']
            if image_url:
                download_image(image_url, i)

if __name__ == "__main__":
    main()
