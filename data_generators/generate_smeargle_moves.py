import re
import json

# Variables for filenames
INPUT_FILE = "./src/data/pokemon.js"
OUTPUT_FILE = "./data_generators/smeargle.json"

def gather_moves(input_file, output_file):
    with open(input_file, 'r') as f:
        lines = f.readlines()

    move_pattern = re.compile(r"\"moves\": \[([^\]]+)\]")
    all_moves = []

    inside_moves = False
    current_moves = []

    for line in lines:
        # Ignore comments
        if "//" in line:
            continue

        if "\"moves\": [" in line:
            inside_moves = True
        
        if inside_moves:
            current_moves.append(line.strip())

        if "]" in line and inside_moves:
            inside_moves = False
            moves_str = ''.join(current_moves)
            match = move_pattern.search(moves_str)
            if match:
                moves = [move.strip().replace("\"", "") for move in match.group(1).split(",")]
                all_moves.extend(moves)
            current_moves = []

    unique_moves = list(set(all_moves))
    with open(output_file, 'w') as f:
        json.dump(unique_moves, f)

# Use the function
gather_moves(INPUT_FILE, OUTPUT_FILE)
