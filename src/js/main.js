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
}

function calculateStat(base, iv, ev, level, natureMultiplier, isHP = false) {
    if (isHP) {
        return Math.floor(0.01 * (2 * base + iv + Math.floor(0.25 * ev)) * level) + level + 10;
    } else {
        return Math.floor((Math.floor(0.01 * (2 * base + iv + Math.floor(0.25 * ev)) * level) + 5) * natureMultiplier);
    }
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

function updatePokemonImage(slot, selectedPokemonId) {
    const pokemonImage = slot.querySelector('.pokemon-image');
    pokemonImage.src = `img/pokemon/${selectedPokemonId}.png`;
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

function validateEVInput(input) {
    if (input.value > 252) {
        input.value = 252;
    } else if (input.value < 0) {
        input.value = 0;
    }
}

function validateLevelInput(input) {
    if (input.value > 100) {
        input.value = 100;
    } else if (input.value < 1) {
        input.value = 1;
    }
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
        </div>
        <table class="pokemon-attributes-table">
            <tr>
                <td><img src="https://placehold.co/40x40" alt="Item Image" class="item-icon"></td>
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
                <td><label>Nature:</label></td>
                <td>
                    <select class="nature-dropdown">
                    </select>
                </td>
            </tr>
            <tr>
                <td><label>Gender:</label></td>
                <td>
                    <select class="gender-dropdown">
                        <option value="male" selected>Male</option>
                        <option value="female">Female</option>
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
        <div class="moves">
            <div>
                <select>
                    <option value="dummyMove1">Dummy Move 1</option>
                </select>
            </div>
            <div>
                <select>
                    <option value="dummyMove2">Dummy Move 2</option>
                </select>
            </div>
            <div>
                <select>
                    <option value="dummyMove3">Dummy Move 3</option>
                </select>
            </div>
            <div>
                <select>
                    <option value="dummyMove4">Dummy Move 4</option>
                </select>
            </div>
        </div>
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

function createPokemonSlot() {
    const slot = document.createElement("div");
    slot.className = "pokemon-slot col-md-4 col-sm-6";
    slot.innerHTML = createPokemonSlotStructure();

    container.appendChild(slot);

    const dropdown = slot.querySelector('.species-dropdown');
    populateDropdown(dropdown);

    $(dropdown).select2({
        placeholder: "Select a Pokémon",
        allowClear: true
    });
    
    $(dropdown).on('select2:select', function(e) {
        const selectedPokemon = pokemonData.find(poke => poke.id === dropdown.value);
        updateTypeDisplay(slot, selectedPokemon.type);
        updateBaseStats(slot, dropdown.value);
        updateCalculatedStats(slot);
        updatePokemonImage(slot, selectedPokemon.id);
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
            validateEVInput(input);
            updateCalculatedStats(slot);
        });
    });

    const levelInput = slot.querySelector('.level-input');
    levelInput.addEventListener('change', () => {
        validateLevelInput(levelInput);
        updateCalculatedStats(slot);
    });

    const natureDropdown = slot.querySelector('.nature-dropdown');
    natureDropdown.addEventListener('change', () => {
        updateCalculatedStats(slot);
    });

    const itemDropdown = slot.querySelector('.item-dropdown');
    $(itemDropdown).on('select2:select', function() {
        updateItemImage(slot, this.value);
    });
    

    populateNatureDropdown(natureDropdown);
    populateItemDropdown(itemDropdown);
    updateItemImage(slot, itemDropdown.value); 
    updateBaseStats(slot, dropdown.value);
    const initialPokemon = pokemonData.find(poke => poke.id === dropdown.value);
    updateTypeDisplay(slot, initialPokemon.type);
    updatePokemonImage(slot, initialPokemon.id);
    updateCalculatedStats(slot);

}

function initializePokemonSlots() {
    for (let i = 0; i < 6; i++) {
        createPokemonSlot();
    }
}

initializePokemonSlots();
