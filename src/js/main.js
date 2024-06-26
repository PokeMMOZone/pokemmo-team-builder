const container = document.getElementById("pokemonContainer");

function populateDropdown(dropdown) {
    pokemonData.forEach(poke => {
        const option = document.createElement("option");
        option.value = poke.id;
        option.innerText = poke.name;
        dropdown.appendChild(option);
    });
    $(dropdown).select2({ placeholder: "Select a Pokémon", allowClear: true });
}

function populateItemDropdown(dropdown) {
    itemsData.forEach(item => {
        const option = document.createElement("option");
        option.value = item.id;
        option.innerText = item.name;
        dropdown.appendChild(option);
    });
    $(dropdown).select2({ placeholder: "Select an Item", allowClear: true });
}

function populateNatureDropdown(dropdown) {
    pokemonNatures.forEach(nature => {
        const option = document.createElement("option");
        option.value = nature.name;
        option.innerText = nature.name;
        dropdown.appendChild(option);
    });
    $(dropdown).select2({ placeholder: "Select a Nature", allowClear: true });
}

function populateAbilityDropdown(dropdown, pokemonId) {
    const abilities = pokemonData.find(poke => poke.id === pokemonId).abilities || [];

    dropdown.innerHTML = ''; // Clear previous abilities

    abilities.forEach(ability => {
        const option = document.createElement("option");
        option.value = ability;
        option.innerText = ability;
        dropdown.appendChild(option);
    });
    $(dropdown).select2({ placeholder: "Select an Ability", allowClear: true });
}

function populateGenderDropdown(dropdown, pokemonId) {
    const genders = pokemonData.find(poke => poke.id === pokemonId).gender || ['male', 'female']; // default to both male and female if not specified

    dropdown.innerHTML = ''; // Clear previous gender options

    genders.forEach(gender => {
        const option = document.createElement("option");
        option.value = gender;
        option.innerText = gender.charAt(0).toUpperCase() + gender.slice(1); // Capitalize first letter
        dropdown.appendChild(option);
    });
    $(dropdown).select2({ placeholder: "Select a Gender", allowClear: true });
}

function populateMoveDropdown(dropdown, pokemonId) {
    const moves = pokemonData.find(poke => poke.id === pokemonId).moves || [];

    dropdown.innerHTML = '<option value="Select a Move">Select a Move</option>'; // Clear previous moves

    moves.forEach(move => {
        const option = document.createElement("option");
        option.value = move;
        option.innerText = move;
        dropdown.appendChild(option);
    });
    $(dropdown).select2({ placeholder: "Select a Move", allowClear: true });
}

function calculateStat(base, iv, ev, level, natureMultiplier, isHP = false) {
    if (isHP) {
        return Math.floor(0.01 * (2 * base + iv + Math.floor(0.25 * ev)) * level) + level + 10;
    } else {
        return Math.floor((Math.floor(0.01 * (2 * base + iv + Math.floor(0.25 * ev)) * level) + 5) * natureMultiplier);
    }
}

function capitalizeWords(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
}

function updateCalculatedStats(slot) {
    const pokemonId = slot.querySelector('.species-dropdown').value;
    const level = parseInt(slot.querySelector('.level-input').value);
    const nature = slot.querySelector('.nature-dropdown').value;
    const ivInputs = slot.querySelectorAll('.ivs input');
    const evInputs = slot.querySelectorAll('.evs input');
    const calculatedStatElements = slot.querySelectorAll('.calculated-stats span');

    const natureData = pokemonNatures.find(n => n.name === nature);
    let natureMultiplier = {
        hp: 1,
        attack: 1,
        defense: 1,
        specialAttack: 1,
        specialDefense: 1,
        speed: 1
    };

    if (natureData.increasedStat !== "None") {
        natureMultiplier[natureData.increasedStat] = 1.1;
    }
    if (natureData.decreasedStat !== "None") {
        natureMultiplier[natureData.decreasedStat] = 0.9;
    }

    const baseStats = pokemonData.find(poke => poke.id === pokemonId).baseStats;
    const stats = ['hp', 'attack', 'defense', 'specialAttack', 'specialDefense', 'speed'];

    stats.forEach((stat, index) => {
        const isHP = stat === 'hp';
        const calculatedStat = calculateStat(baseStats[stat], parseInt(ivInputs[index].value), parseInt(evInputs[index].value), level, natureMultiplier[stat], isHP);
        calculatedStatElements[index + 1].innerText = calculatedStat; // +1 to skip the "Stats" label
    });
}

function updateTypeDisplay(slot, types) {
    const typeElements = slot.querySelectorAll('.type-label');
    typeElements[0].innerText = types[0];
    typeElements[0].style.backgroundColor = typeColors[types[0]];

    if (types[1]) {
        typeElements[1].innerText = types[1];
        typeElements[1].style.backgroundColor = typeColors[types[1]];
        typeElements[1].style.display = 'block'; // Ensure the second type label is displayed
    } else {
        typeElements[1].innerText = '';
        typeElements[1].style.backgroundColor = 'transparent';
        typeElements[1].style.display = 'none'; // Hide the second type label if there's only one type
    }
}

function updateTypeMove1(slot, types) {
    const typeElements = slot.querySelectorAll('.movetype-label1');
    typeElements[0].innerText = types;
    typeElements[0].style.backgroundColor = typeColors[types];
}

function updateTypeMove2(slot, types) {
    const typeElements = slot.querySelectorAll('.movetype-label2');
    typeElements[0].innerText = types;
    typeElements[0].style.backgroundColor = typeColors[types];
}

function updateTypeMove3(slot, types) {
    const typeElements = slot.querySelectorAll('.movetype-label3');
    typeElements[0].innerText = types;
    typeElements[0].style.backgroundColor = typeColors[types];
}

function updateTypeMove4(slot, types) {
    const typeElements = slot.querySelectorAll('.movetype-label4');
    typeElements[0].innerText = types;
    typeElements[0].style.backgroundColor = typeColors[types];
}

function updatePokemonImage(slot, selectedPokemonId) {

    const pokemonImage = slot.querySelector('.pokemon-image');
    pokemonImage.crossOrigin = "anonymous";

    if (slot.querySelector('.alpha-checkbox').checked) {
        pokemonImage.onload = function () {
            addRedOutline(pokemonImage);
        };
    } else {
        pokemonImage.onload = null;
    }

    if (slot.querySelector('.shiny-checkbox').checked) {
        pokemonImage.src = `img/shiny/${selectedPokemonId}.png`;
    } else {
        pokemonImage.src = `img/pokemon/${selectedPokemonId}.png`;
    }

}

function updateItemImage(slot, selectedItemId) {
    const itemImage = slot.querySelector('.item-icon');
    itemImage.src = `img/items/${selectedItemId}.png`;
}

function validateIVInput(input) {
    if (input.value > 31) {
        input.value = 31;
    } else if (input.value < 0) {
        input.value = 0;
    }
}

function validateEVInput(input, slot) {
    const value = parseInt(input.value) || 0;

    if (value < 0) {
        input.value = 0;
    } else if (value > 252) {
        input.value = 252;
    }

    // Check the total EVs now
    const evInputs = slot.querySelectorAll('.evs input');
    let totalEVs = 0;

    evInputs.forEach(evInput => {
        totalEVs += parseInt(evInput.value) || 0;
    });

    if (totalEVs > 510) {
        const excessValue = totalEVs - 510;
        input.value = parseInt(input.value) - excessValue;
    }
}


function validateLevelInput(input) {
    if (input.value > 100) {
        input.value = 100;
    } else if (input.value < 1) {
        input.value = 1;
    }
}

function addRedOutline(imageElement, outlineThickness = 1) {
    const canvas = document.createElement('canvas');
    canvas.width = imageElement.width;
    canvas.height = imageElement.height;

    const ctx = canvas.getContext('2d');
    ctx.drawImage(imageElement, 0, 0);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    for (let y = outlineThickness; y < canvas.height - outlineThickness; y++) {
        for (let x = outlineThickness; x < canvas.width - outlineThickness; x++) {
            const index = (y * canvas.width + x) * 4;
            const alpha = data[index + 3];

            if (alpha > 200) {
                let isEdge = false;
                for (let offsetY = -outlineThickness; offsetY <= outlineThickness && !isEdge; offsetY++) {
                    for (let offsetX = -outlineThickness; offsetX <= outlineThickness && !isEdge; offsetX++) {
                        if (offsetX === 0 && offsetY === 0) continue; // skip center pixel
                        const neighborIndex = (y + offsetY) * canvas.width * 4 + (x + offsetX) * 4;
                        if (data[neighborIndex + 3] < 50) {
                            isEdge = true;
                        }
                    }
                }

                if (isEdge) {
                    data[index] = 255;     // Red
                    data[index + 1] = 0;   // Green
                    data[index + 2] = 0;   // Blue
                }
            }
        }
    }

    ctx.putImageData(imageData, 0, 0);
    imageElement.src = canvas.toDataURL();
}

function createPokemonSlotStructure() {
    return `
    <div class="left-section">
        <select class="species-dropdown"></select>
        <img src="https://placehold.co/96x96" alt="Pokemon Image" class="pokemon-image">
        <div class="type-label-container">
            <div class="type-label" data-type="type1">Type1</div>
            <div class="type-label" data-type="type2">Type2</div>
        </div> 
        <input type="text" placeholder="Nickname" class="nickname-input">
        <div>
            <label>Level:</label>
            <input type="number" min="1" max="100" value="50" class="level-input" style="width: 60px;">
            <label>
                <input type="checkbox" class="shiny-checkbox" id="shinycheckbox">
            Shiny
            </label>
            <label>
                <input type="checkbox" class="alpha-checkbox" id="alphacheckbox">
            Alpha
            </label>
        </div>
        <table class="pokemon-attributes-table">
            <tr>
                <td><img src="https://placehold.co/30x30" alt="Item Image" class="item-icon"></td>
                <td>
                    <select class="item-dropdown">
                    </select>
                </td>
            </tr>
            <tr>
                <td><label>Ability:</label></td>
                <td>
                    <select class="ability-dropdown">
                        <option value="dummyAbility">Dummy Ability</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td><label>Gender:</label></td>
                <td>
                    <select class="gender-dropdown">
                    </select>
                </td>
            </tr>
        </table>
    </div>
    <div class="right-section">
        <div class="stat-block">
            <div class="stat-column stat-names">
                <span>Stat</span>
                <span>HP:</span>
                <span>Atk:</span>
                <span>Def:</span>
                <span>SpA:</span>
                <span>SpD:</span>
                <span>Spe:</span>
            </div>
            <div class="stat-column base-stats">
                <span>Base</span>
                <span>100</span>
                <span>100</span>
                <span>100</span>
                <span>100</span>
                <span>100</span>
                <span>100</span>
            </div>
            <div class="stat-column ivs">
                <span>IVs</span>
                <input type="number" min="0" max="31" value="31" step="1">
                <input type="number" min="0" max="31" value="31" step="1">
                <input type="number" min="0" max="31" value="31" step="1">
                <input type="number" min="0" max="31" value="31" step="1">
                <input type="number" min="0" max="31" value="31" step="1">
                <input type="number" min="0" max="31" value="31" step="1">
            </div>
            <div class="stat-column evs">
                <span>EVs</span>
                <input type="number" min="0" max="252" value="0" step="4">
                <input type="number" min="0" max="252" value="0" step="4">
                <input type="number" min="0" max="252" value="0" step="4">
                <input type="number" min="0" max="252" value="0" step="4">
                <input type="number" min="0" max="252" value="0" step="4">
                <input type="number" min="0" max="252" value="0" step="4">
            </div>
            <div class="stat-column calculated-stats">
                <span>Stats</span>
                <span>200</span>
                <span>200</span>
                <span>200</span>
                <span>200</span>
                <span>200</span>
                <span>200</span>
            </div>
        </div>
    <table class="pokemon-attributes-table2">
        <tr>
            <td><label>Nature:</label></td>
            <td>
                <select class="nature-dropdown">
                </select>
            </td>
        </tr>
    </table>
        <table class="move-types-table">
            <tr>
                <td><div class="movetype-label1">Type</div></td>
                <td>
                    <select name="move1">
						<option value="dummyMove1">Dummy Move 1</option>
					</select>
                </td>
            </tr>
            <tr>
                <td><div class="movetype-label2">Type</div></td>
                <td>
                    <select name="move2">
						<option value="dummyMove2">Dummy Move 2</option>
					</select>
                </td>
            </tr>
            <tr>
                <td><div class="movetype-label3">Type</div></td>
                <td>
                    <select name="move3">
						<option value="dummyMove3">Dummy Move 3</option>
					</select>
                </td>
            </tr>
            <tr>
                <td><div class="movetype-label4">Type</div></td>
                <td>
                    <select name="move4">
						<option value="dummyMove4">Dummy Move 4</option>
					</select>
                </td>
            </tr>
        </table>
    </div>
    `;

}

function updateBaseStats(slot, pokemonId) {
    const baseStats = pokemonData.find(poke => poke.id === pokemonId).baseStats;
    const baseStatElements = slot.querySelectorAll('.base-stats span');

    const stats = [baseStats.hp, baseStats.attack, baseStats.defense, baseStats.specialAttack, baseStats.specialDefense, baseStats.speed];

    baseStatElements.forEach((element, index) => {
        if (index !== 0) {
            element.innerText = stats[index - 1];
        }
    });
}

function getNextType(currentType) {
    const types = Object.keys(typeColors);
    const currentIndex = types.indexOf(currentType);

    if (currentIndex === -1 || currentIndex >= types.indexOf('Dark')) {
        return types[0];  // If the type isn't found or is after 'Dark', return the first type.
    }

    let nextIndex = currentIndex + 1;
    while (types[nextIndex] === 'Fairy' || types[nextIndex] === 'None') {
        nextIndex++;
    }

    return types[nextIndex];
}

function createPokemonSlot() {
    const slot = document.createElement("div");
    slot.className = "pokemon-slot col-md-4 col-sm-6";
    slot.innerHTML = createPokemonSlotStructure();

    container.appendChild(slot);

    const dropdown = slot.querySelector('.species-dropdown');
    populateDropdown(dropdown);

    const abilityDropdown = slot.querySelector('.ability-dropdown');
    const genderDropdown = slot.querySelector('.gender-dropdown');


    $(dropdown).select2({
        placeholder: "Select a Pokémon",
        allowClear: true
    });

    $(dropdown).on('select2:select', function (e) {
        const selectedPokemon = pokemonData.find(poke => poke.id === dropdown.value);
        updateTypeDisplay(slot, selectedPokemon.type);
        updateBaseStats(slot, dropdown.value);
        updateCalculatedStats(slot);
        updatePokemonImage(slot, selectedPokemon.id);
        populateAbilityDropdown(abilityDropdown, selectedPokemon.id);
        populateGenderDropdown(genderDropdown, selectedPokemon.id);

        const movedropdown1 = slot.querySelector('select[name="move1"]');
        const movedropdown2 = slot.querySelector('select[name="move2"]');
        const movedropdown3 = slot.querySelector('select[name="move3"]');
        const movedropdown4 = slot.querySelector('select[name="move4"]');

        // Populating move dropdowns individually by name
        populateMoveDropdown(movedropdown1, selectedPokemon.id);
        populateMoveDropdown(movedropdown2, selectedPokemon.id);
        populateMoveDropdown(movedropdown3, selectedPokemon.id);
        populateMoveDropdown(movedropdown4, selectedPokemon.id);

        updateTypeMove1(slot, "None");
        updateTypeMove2(slot, "None");
        updateTypeMove3(slot, "None");
        updateTypeMove4(slot, "None");

    });

    const ivInputs = slot.querySelectorAll('.ivs input');
    ivInputs.forEach(input => {
        input.addEventListener('change', () => {
            validateIVInput(input);
            updateCalculatedStats(slot);
        });
    });

    const evInputs = slot.querySelectorAll('.evs input');
    evInputs.forEach(input => {
        input.addEventListener('change', () => {
            validateEVInput(input, slot);
            updateCalculatedStats(slot);
        });
    });

    const levelInput = slot.querySelector('.level-input');
    levelInput.addEventListener('change', () => {
        validateLevelInput(levelInput);
        updateCalculatedStats(slot);
    });

    const natureDropdown = slot.querySelector('.nature-dropdown');
    $(natureDropdown).on('select2:select', function () {
        updateCalculatedStats(slot);
    });

    const itemDropdown = slot.querySelector('.item-dropdown');
    $(itemDropdown).select2({ placeholder: "Select an Item", allowClear: true });

    $(itemDropdown).on('select2:select', function () {
        try {
            updateItemImage(slot, this.value);
        } catch (error) {
            console.error(`Error updating item image: ${error.message}`);
        }
    });

    const movedropdown1 = slot.querySelector('select[name="move1"]');
    const movedropdown2 = slot.querySelector('select[name="move2"]');
    const movedropdown3 = slot.querySelector('select[name="move3"]');
    const movedropdown4 = slot.querySelector('select[name="move4"]');

    $(movedropdown1).on('select2:select', function () {
        try {
            const pokemove1 = movesData.find(move => move.name === movedropdown1.value);
            if (pokemove1) {
                updateTypeMove1(slot, pokemove1.type);
            } else {
                console.error(`Move not found in movesData for value: ${movedropdown1.value}`);
            }
        } catch (error) {
            console.error(`Error updating move 1: ${error.message}`);
        }
    });

    $(movedropdown2).on('select2:select', function () {
        try {
            const pokemove2 = movesData.find(move => move.name === movedropdown2.value);
            if (pokemove2) {
                updateTypeMove2(slot, pokemove2.type);
            } else {
                console.error(`Move not found in movesData for value: ${movedropdown2.value}`);
            }
        } catch (error) {
            console.error(`Error updating move 2: ${error.message}`);
        }
    });

    $(movedropdown3).on('select2:select', function () {
        try {
            const pokemove3 = movesData.find(move => move.name === movedropdown3.value);
            if (pokemove3) {
                updateTypeMove3(slot, pokemove3.type);
            } else {
                console.error(`Move not found in movesData for value: ${movedropdown3.value}`);
            }
        } catch (error) {
            console.error(`Error updating move 3: ${error.message}`);
        }
    });

    $(movedropdown4).on('select2:select', function () {
        try {
            const pokemove4 = movesData.find(move => move.name === movedropdown4.value);
            if (pokemove4) {
                updateTypeMove4(slot, pokemove4.type);
            } else {
                console.error(`Move not found in movesData for value: ${movedropdown4.value}`);
            }
        } catch (error) {
            console.error(`Error updating move 4: ${error.message}`);
        }
    });

    slot.querySelector('.movetype-label1').addEventListener('click', function (event) {
        const movedropdown1 = slot.querySelector('select[name="move1"]');
        if (movedropdown1.value === "Hidden Power") {
            const typelabel1 = slot.querySelectorAll('.movetype-label1');
            updateTypeMove1(slot, getNextType(typelabel1[0].innerText));
        }
    });

    slot.querySelector('.movetype-label2').addEventListener('click', function (event) {
        const movedropdown2 = slot.querySelector('select[name="move2"]');
        if (movedropdown2.value === "Hidden Power") {
            const typelabel2 = slot.querySelectorAll('.movetype-label2');
            updateTypeMove2(slot, getNextType(typelabel2[0].innerText));
        }
    });

    slot.querySelector('.movetype-label3').addEventListener('click', function (event) {
        const movedropdown3 = slot.querySelector('select[name="move3"]');
        if (movedropdown3.value === "Hidden Power") {
            const typelabel3 = slot.querySelectorAll('.movetype-label3');
            updateTypeMove3(slot, getNextType(typelabel3[0].innerText));
        }
    });

    slot.querySelector('.movetype-label4').addEventListener('click', function (event) {
        const movedropdown4 = slot.querySelector('select[name="move4"]');
        if (movedropdown4.value === "Hidden Power") {
            const typelabel4 = slot.querySelectorAll('.movetype-label4');
            updateTypeMove4(slot, getNextType(typelabel4[0].innerText));
        }
    });

    slot.querySelector('.shiny-checkbox').addEventListener('change', function () {
        const selectedPokemon = pokemonData.find(poke => poke.id === dropdown.value);
        updatePokemonImage(slot, selectedPokemon.id);
    });

    slot.querySelector('.alpha-checkbox').addEventListener('change', function () {
        const selectedPokemon = pokemonData.find(poke => poke.id === dropdown.value);
        updatePokemonImage(slot, selectedPokemon.id);
    });

    populateNatureDropdown(natureDropdown);
    populateItemDropdown(itemDropdown);
    updateItemImage(slot, itemDropdown.value);
    updateBaseStats(slot, dropdown.value);
    const initialPokemon = pokemonData.find(poke => poke.id === dropdown.value);
    updateTypeDisplay(slot, initialPokemon.type);
    updatePokemonImage(slot, initialPokemon.id);
    populateAbilityDropdown(abilityDropdown, initialPokemon.id)
    populateGenderDropdown(genderDropdown, initialPokemon.id);

    // Populating move dropdowns individually by name
    populateMoveDropdown(slot.querySelector('select[name="move1"]'), initialPokemon.id);
    populateMoveDropdown(slot.querySelector('select[name="move2"]'), initialPokemon.id);
    populateMoveDropdown(slot.querySelector('select[name="move3"]'), initialPokemon.id);
    populateMoveDropdown(slot.querySelector('select[name="move4"]'), initialPokemon.id);

    updateTypeMove1(slot, "None");
    updateTypeMove2(slot, "None");
    updateTypeMove3(slot, "None");
    updateTypeMove4(slot, "None");

    updateCalculatedStats(slot);

}

function initializePokemonSlots() {
    for (let i = 0; i < 6; i++) {
        createPokemonSlot();
    }
}

function getPokemonIdFromName(name) {
    for (let pokemon of pokemonData) {
        if (pokemon.name.toLowerCase() === name.toLowerCase()) {
            return pokemon.id;
        }
    }
    return "000";  // or a default value if not found
}

function getItemIdFromName(itemName) {
    const item = itemsData.find(i => i.name.toLowerCase() === itemName.toLowerCase());
    return item ? item.id : "000"; // return "000" if not found
}

function getFullNatureName(shorthandName) {
    for (const nature of pokemonNatures) {
        if (nature.name.startsWith(shorthandName)) {
            return nature.name;
        }
    }
    return shorthandName; // Default to shorthand if not found in pokemonNatures
}

function showdownToJson(text) {
    const lines = text.trim().split('\n');
    const team = [];
    let pokemon = {};

    for (let line of lines) {
        line = line.trim();

        if (!line) {
            if (Object.keys(pokemon).length && team.length < 6) {
                team.push(pokemon);
                pokemon = {};
            }
            continue;
        }

        if (line.includes('@')) {
            const itemName = line.substring(line.lastIndexOf('@') + 1).trim();
            const namePart = line.substring(0, line.lastIndexOf('@')).trim();
            let nameComponents = namePart.split(' (');

            switch (nameComponents.length) {
                case 3:
                    pokemon.nickname = nameComponents[0].trim();
                    pokemon.species = getPokemonIdFromName(nameComponents[1]);
                    pokemon.gender = nameComponents[2] === "M)" ? "Male" : "Female";
                    break;
                case 2:
                    if (nameComponents[1] === "M)" || nameComponents[1] === "F)") {
                        pokemon.species = getPokemonIdFromName(nameComponents[0]);
                        pokemon.gender = nameComponents[1] === "M)" ? "Male" : "Female";
                        pokemon.nickname = "";
                    } else {
                        pokemon.nickname = nameComponents[0].trim();
                        pokemon.species = getPokemonIdFromName(nameComponents[1].replace(')', ''));
                        pokemon.gender = "Male";
                    }
                    break;
                default:
                    pokemon.species = getPokemonIdFromName(nameComponents[0]);
                    pokemon.gender = "Male";
                    pokemon.nickname = "";
            }

            pokemon.item = getItemIdFromName(itemName);
            pokemon.level = 50;
            pokemon.ability = "";
            pokemon.ivs = [31, 31, 31, 31, 31, 31];
            pokemon.evs = [0, 0, 0, 0, 0, 0];
            pokemon.moves = [];
            pokemon.hpTypes = [];
            pokemon.nature = "Bashful";
            pokemon.shiny = "No";
            pokemon.alpha = "No";

        } else if (/^level:?\s+\d+$/i.test(line)) {
            const levelMatch = line.match(/\d+/);
            if (levelMatch) {
                pokemon.level = parseInt(levelMatch[0], 10);
                if (pokemon.level > 100) {
                    pokemon.level = 100;
                } else if (pokemon.level < 1) {
                    pokemon.level = 1;
                }
            }
        } else if (/^shiny:/i.test(line)) {
            pokemon.shiny = line.split(': ')[1].trim();
        } else if (/^alpha:/i.test(line)) {
            pokemon.alpha = line.split(': ')[1].trim();
        } else if (/^ability:/i.test(line)) {
            pokemon.ability = line.split(': ')[1];
        } else if (/^evs:/i.test(line)) {
            const evData = line.split(': ')[1].split(' / ');
            for (let ev of evData) {
                const [value, stat] = ev.split(' ');
                switch (stat.toLowerCase()) {
                    case 'hp': pokemon.evs[0] = parseInt(value); break;
                    case 'atk': pokemon.evs[1] = parseInt(value); break;
                    case 'def': pokemon.evs[2] = parseInt(value); break;
                    case 'spa': pokemon.evs[3] = parseInt(value); break;
                    case 'spd': pokemon.evs[4] = parseInt(value); break;
                    case 'spe': pokemon.evs[5] = parseInt(value); break;
                }
            }
        } else if (/^ivs:/i.test(line)) {
            const ivData = line.split(': ')[1].split(' / ');
            for (let iv of ivData) {
                const [value, stat] = iv.split(' ');
                switch (stat.toLowerCase()) {
                    case 'hp': pokemon.ivs[0] = parseInt(value); break;
                    case 'atk': pokemon.ivs[1] = parseInt(value); break;
                    case 'def': pokemon.ivs[2] = parseInt(value); break;
                    case 'spa': pokemon.ivs[3] = parseInt(value); break;
                    case 'spd': pokemon.ivs[4] = parseInt(value); break;
                    case 'spe': pokemon.ivs[5] = parseInt(value); break;
                }
            }
        } else if (/\s+nature$/i.test(line)) {
            pokemon.nature = getFullNatureName(line.split(' ')[0]);
        } else if (/^- hidden power/i.test(line)) {
            const typeMatch = line.match(/\[([a-zA-Z]+)\]/);
            const capitalizedType = typeMatch[1].charAt(0).toUpperCase() + typeMatch[1].slice(1).toLowerCase();
            if (typeMatch && typeMatch[1]) {
                pokemon.moves.push(`Hidden Power`);
                pokemon.hpTypes.push(capitalizedType);
            }
        } else if (line.startsWith('- ')) {
            const move = capitalizeWords(line.substring(2));
            pokemon.moves.push(move);
            pokemon.hpTypes.push("Normal");
        }
    }

    if (Object.keys(pokemon).length && team.length < 6) {
        team.push(pokemon);
    }

    return { team: team };
}

function getCurrentTeamShowdownFormat() {
    const slots = document.querySelectorAll('.pokemon-slot');
    const teamLines = [];

    slots.forEach(slot => {
        const speciesID = slot.querySelector('.species-dropdown').value;
        const species = pokemonData.find(p => p.id === speciesID)?.name;
        if (!species || species === 'Select a Pokémon') return; // Skip if no valid Pokémon is selected

        const nickname = slot.querySelector('.nickname-input').value;
        const level = slot.querySelector('.level-input').value;
        const alpha = slot.querySelector('.alpha-checkbox').checked ? "Yes" : null;
        const shiny = slot.querySelector('.shiny-checkbox').checked ? "Yes" : null;

        const itemID = slot.querySelector('.item-dropdown').value;
        const item = itemsData.find(i => i.id === itemID)?.name;

        const ability = slot.querySelector('.ability-dropdown').value;
        const gender = slot.querySelector('.gender-dropdown').value;
        const nature = slot.querySelector('.nature-dropdown').value;
        const ivs = Array.from(slot.querySelectorAll('.ivs input')).map(iv => iv.value);
        const evs = Array.from(slot.querySelectorAll('.evs input')).map(ev => ev.value);
        const moves = [
            slot.querySelector('select[name="move1"]').value,
            slot.querySelector('select[name="move2"]').value,
            slot.querySelector('select[name="move3"]').value,
            slot.querySelector('select[name="move4"]').value,
        ].filter(move => move && move !== "Select a Move");
        const hpTypes = [
            ...slot.querySelectorAll('.movetype-label1,.movetype-label2,.movetype-label3,.movetype-label4')
        ].map(typeLabel => typeLabel.innerText);

        // Convert to Showdown format
        let nameString = species;
        if (nickname) {
            nameString = `${nickname} (${species})`;
        }
        if (gender && (gender === "Male" || gender === "Female")) {
            nameString += ` (${gender.charAt(0)})`;
        }
        if (item && item !== 'Select an Item') {
            nameString += ` @ ${item}`;
        }
        teamLines.push(nameString);

        teamLines.push(`Ability: ${ability}`);
        teamLines.push(`Level: ${level}`);
        if (shiny) {
            teamLines.push(`Shiny: ${shiny}`);
        }
        if (alpha) {
            teamLines.push(`Alpha: ${alpha}`);
        }

        const evLabels = ['HP', 'Atk', 'Def', 'SpA', 'SpD', 'Spe'];
        const evStrings = [];
        evs.forEach((ev, idx) => {
            if (ev && ev !== '0') {
                evStrings.push(`${ev} ${evLabels[idx]}`);
            }
        });
        if (evStrings.length) {
            teamLines.push(`EVs: ${evStrings.join(' / ')}`);
        }

        const ivLabels = ['HP', 'Atk', 'Def', 'SpA', 'SpD', 'Spe'];
        const ivStrings = [];
        ivs.forEach((iv, idx) => {
            if (iv && iv !== '31') { // 31 is the default IV in Pokémon games
                ivStrings.push(`${iv} ${ivLabels[idx]}`);
            }
        });
        if (ivStrings.length) {
            teamLines.push(`IVs: ${ivStrings.join(' / ')}`);
        }

        if (nature) {
            const natureObj = pokemonNatures.find(n => n.name.includes(nature));
            if (natureObj) {
                let actualNature = natureObj.name.split(' ')[0]; // Extracts only the first word from the nature (i.e., "Adamant" from "Adamant (+Atk, -SpA)")
                teamLines.push(`${actualNature} Nature`);
            } else {
                teamLines.push(`${nature} Nature`);
            }
        }

        moves.forEach((move, idx) => {
            if (move === 'Hidden Power') {
                teamLines.push(`- Hidden Power [${hpTypes[idx]}]`);
            } else if (move && move !== "Select a Move") {
                teamLines.push(`- ${move}`);
            }
        });

        teamLines.push('');  // Add a blank line to separate Pokémon
    });

    return teamLines.join('\n').trim();  // trim to remove potential trailing newline
}

function loadSavedTeams() {
    const selectBox = $("#savedTeams");
    selectBox.empty();  // Remove all options
    selectBox.append('<option value="--Select Saved Team--">--Select Saved Team--</option>');

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);

        try {
            const parsedValue = JSON.parse(value);

            // Check if the parsed value has a 'team' key
            if (parsedValue.hasOwnProperty('team')) {
                selectBox.append(`<option value="${key}">${key}</option>`);
            }
        } catch (e) {
            // If there's an error parsing the value (e.g. it's not valid JSON), simply continue to the next item
            continue;
        }
    }
}

function getCurrentTeam() {
    const slots = document.querySelectorAll('.pokemon-slot');
    const teamMembers = [];


    slots.forEach(slot => {

        const typelabel1 = slot.querySelectorAll('.movetype-label1');
        const typelabel2 = slot.querySelectorAll('.movetype-label2');
        const typelabel3 = slot.querySelectorAll('.movetype-label3');
        const typelabel4 = slot.querySelectorAll('.movetype-label4');

        shinyVar = "No";
        alphaVar = "No";

        if (slot.querySelector('.alpha-checkbox').checked) {
            alphaVar = "Yes";
        } else {
            alphaVar = "No";
        }

        if (slot.querySelector('.shiny-checkbox').checked) {
            shinyVar = "Yes";
        } else {
            shinyVar = "No";
        }

        const pokemon = {
            species: slot.querySelector('.species-dropdown').value,
            nickname: slot.querySelector('.nickname-input').value,
            level: slot.querySelector('.level-input').value,
            alpha: alphaVar,
            shiny: shinyVar,
            item: slot.querySelector('.item-dropdown').value,
            ability: slot.querySelector('.ability-dropdown').value,
            gender: slot.querySelector('.gender-dropdown').value,
            nature: slot.querySelector('.nature-dropdown').value,
            ivs: Array.from(slot.querySelectorAll('.ivs input')).map(iv => iv.value),
            evs: Array.from(slot.querySelectorAll('.evs input')).map(ev => ev.value),
            moves: [
                slot.querySelector('select[name="move1"]').value,
                slot.querySelector('select[name="move2"]').value,
                slot.querySelector('select[name="move3"]').value,
                slot.querySelector('select[name="move4"]').value,
            ],
            hpTypes: [
                typelabel1[0].innerText,
                typelabel2[0].innerText,
                typelabel3[0].innerText,
                typelabel4[0].innerText,
            ]
        };
        teamMembers.push(pokemon);
    });

    return {
        team: teamMembers
    };
}

function loadTeamData(data) {
    const teamDataArray = data.team; // Extracting the team array from the object.
    const slots = document.querySelectorAll('.pokemon-slot');

    slots.forEach((slot, index) => {
        const pokemon = teamDataArray[index];

        // Check if there's data for this slot
        if (pokemon) {

            if (pokemon.alpha === "Yes") {
                slot.querySelector('.alpha-checkbox').checked = true;
            } else {
                slot.querySelector('.alpha-checkbox').checked = false;
            }

            if (pokemon.shiny === "Yes") {
                slot.querySelector('.shiny-checkbox').checked = true;
            } else {
                slot.querySelector('.shiny-checkbox').checked = false;
            }

            $(slot.querySelector('.species-dropdown')).val(pokemon.species).trigger('change').trigger('select2:select');
            slot.querySelector('.nickname-input').value = pokemon.nickname;
            slot.querySelector('.level-input').value = pokemon.level;
            $(slot.querySelector('.item-dropdown')).val(pokemon.item).trigger('change').trigger('select2:select');
            $(slot.querySelector('.ability-dropdown')).val(pokemon.ability).trigger('change').trigger('select2:select');
            $(slot.querySelector('.gender-dropdown')).val(pokemon.gender).trigger('change').trigger('select2:select');

            const ivInputs = slot.querySelectorAll('.ivs input');
            ivInputs.forEach((input, ivIndex) => {
                input.value = pokemon.ivs[ivIndex];
            });

            const evInputs = slot.querySelectorAll('.evs input');
            evInputs.forEach((input, evIndex) => {
                input.value = pokemon.evs[evIndex];
            });

            // Handle moves, accounting for possibly less than 4 moves
            for (let i = 0; i < 4; i++) {
                if (pokemon.moves[i]) {
                    $(slot.querySelector(`select[name="move${i + 1}"]`)).val(pokemon.moves[i]).trigger('change').trigger('select2:select');
                } else {
                    $(slot.querySelector(`select[name="move${i + 1}"]`)).val('Select a Move').trigger('change').trigger('select2:select');
                }
            }

            const movedropdown1 = slot.querySelector('select[name="move1"]');
            if (movedropdown1.value === "Hidden Power") {
                updateTypeMove1(slot, pokemon.hpTypes[0]);
            }

            const movedropdown2 = slot.querySelector('select[name="move2"]');
            if (movedropdown2.value === "Hidden Power") {
                updateTypeMove2(slot, pokemon.hpTypes[1]);
            }

            const movedropdown3 = slot.querySelector('select[name="move3"]');
            if (movedropdown3.value === "Hidden Power") {
                updateTypeMove3(slot, pokemon.hpTypes[2]);
            }

            const movedropdown4 = slot.querySelector('select[name="move4"]');
            if (movedropdown4.value === "Hidden Power") {
                updateTypeMove4(slot, pokemon.hpTypes[3]);
            }

            $(slot.querySelector('.nature-dropdown')).val(pokemon.nature).trigger('change').trigger('select2:select');
        }
    });
}


initializePokemonSlots();

$(document).ready(function () {
    $("#importTeam").click(function () {
        // Show the custom modal
        $('#importShowdownPrompt').modal('show');
    });

    $("#submitimportShowdownPrompt").click(function () {
        const showdownFormat = $("#importShowdownPromptInput").val();
        // console.log(showdownFormat);
        if (showdownFormat) {
            const teamData = showdownToJson(showdownFormat);
            // console.log(teamData);
            loadTeamData(teamData);
        }
        $('#importShowdownPrompt').modal('hide');
        $("#teamName").val('');

        // Clear the input
        $("#importShowdownPromptInput").val('');
    });

    // Copy the current team to clipboard in Showdown format
    $("#exportTeam").click(function () {
        const exportData = getCurrentTeamShowdownFormat();
        $('#exportOutput').val(exportData);
        $('#exportModal').modal('show');
    });

    // Save current team to browser storage
    $("#saveTeam").click(function () {
        const teamName = $("#teamName").val();
        if (!teamName) {
            alert("Please enter a team name!");
            return;
        }
        // Assuming you have a function 'getCurrentTeam()' that retrieves the current team data
        const teamData = getCurrentTeam();
        localStorage.setItem(teamName, JSON.stringify(teamData));
        // Refresh the list of saved teams
        loadSavedTeams();
        const selectBox = $("#savedTeams");
        $(selectBox).val(teamName).trigger('change').trigger('select2:select');
    });


    // Load a saved team
    $("#loadTeam").click(function () {
        const selectedTeamName = $("#savedTeams").val();

        // Check if the selected name isn't the default text
        if (selectedTeamName === "--Select Saved Team--") {
            // alert("Please select a valid team!");  // Optional: Alert the user to choose a valid team.
            return;  // Exit the function early
        }

        $("#teamName").val(selectedTeamName);

        const teamDataString = localStorage.getItem(selectedTeamName);
        if (teamDataString) {
            const teamData = JSON.parse(teamDataString);
            // Assuming you have a function 'loadTeamData()' that sets the current team to the provided data
            loadTeamData(teamData);
        }

    });

    $('#copyToClipboard').on('click', function () {
        const copyText = document.getElementById("exportOutput");

        // Using the Clipboard API
        navigator.clipboard.writeText(copyText.value).then(function () {
            // alert("Copied to clipboard!");
        }).catch(function (err) {
            console.error('Could not copy text: ', err);
        });

    });



    // Delete a saved team
    $("#deleteTeam").click(function () {
        const selectedTeamName = $("#savedTeams").val();

        // Check if the selected name isn't provided or is the default text
        if (!selectedTeamName || selectedTeamName === "--Select Saved Team--") {
            // alert("Please select a valid team to delete!");
            return;  // Exit the function early
        }

        localStorage.removeItem(selectedTeamName);
        // Refresh the list of saved teams
        loadSavedTeams();
    });

    $('body').on('click', '[data-target="#creditsModal"]', function () {
        $('#creditsModal').modal('show');
    });

});

// Call this when the document is ready:
loadSavedTeams();