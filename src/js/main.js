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

    dropdown.innerHTML = '<option value="dummyMove1">Select a Move</option>'; // Clear previous moves

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
        updateItemImage(slot, this.value);
    });

    const movedropdown1 = slot.querySelector('select[name="move1"]');
    const movedropdown2 = slot.querySelector('select[name="move2"]');
    const movedropdown3 = slot.querySelector('select[name="move3"]');
    const movedropdown4 = slot.querySelector('select[name="move4"]');

    $(movedropdown1).on('select2:select', function () {
        const pokemove1 = movesData.find(move => move.name === movedropdown1.value);
        updateTypeMove1(slot, pokemove1.type);
    });

    $(movedropdown2).on('select2:select', function () {
        const pokemove2 = movesData.find(move => move.name === movedropdown2.value);
        updateTypeMove2(slot, pokemove2.type);
    });

    $(movedropdown3).on('select2:select', function () {
        const pokemove3 = movesData.find(move => move.name === movedropdown3.value);
        updateTypeMove3(slot, pokemove3.type);
    });

    $(movedropdown4).on('select2:select', function () {
        const pokemove4 = movesData.find(move => move.name === movedropdown4.value);
        updateTypeMove4(slot, pokemove4.type);
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

function showdownToJson(text) {
    const lines = text.trim().split('\n');
    const team = [];
    let pokemon = {};

    for (let line of lines) {
        line = line.trim();
        
        if (!line) {
            if (Object.keys(pokemon).length) {
                team.push(pokemon);
                pokemon = {};
            }
            continue;
        }

        if (line.includes('@')) {
            const parts = line.split(' @ ');
            pokemon.species = parts[0].split(' (')[0];
            pokemon.item = parts[1];
            pokemon.nickname = "";
            pokemon.level = 50;
            pokemon.ability = "";
            pokemon.gender = "";
            pokemon.ivs = [31, 31, 31, 31, 31, 31];
            pokemon.evs = [0, 0, 0, 0, 0, 0];
            pokemon.moves = [];
            pokemon.nature = "";
        } else if (line.startsWith('Ability:')) {
            pokemon.ability = line.split(': ')[1];
        } else if (line.startsWith('EVs:')) {
            const evData = line.split(': ')[1].split(' / ');
            for (let ev of evData) {
                const [value, stat] = ev.split(' ');
                switch (stat) {
                    case 'HP': pokemon.evs[0] = parseInt(value); break;
                    case 'Atk': pokemon.evs[1] = parseInt(value); break;
                    case 'Def': pokemon.evs[2] = parseInt(value); break;
                    case 'SpA': pokemon.evs[3] = parseInt(value); break;
                    case 'SpD': pokemon.evs[4] = parseInt(value); break;
                    case 'Spe': pokemon.evs[5] = parseInt(value); break;
                }
            }
        } else if (line.startsWith('IVs:')) {
            const ivData = line.split(': ')[1].split(' / ');
            for (let iv of ivData) {
                const [value, stat] = iv.split(' ');
                switch (stat) {
                    case 'HP': pokemon.ivs[0] = parseInt(value); break;
                    case 'Atk': pokemon.ivs[1] = parseInt(value); break;
                    case 'Def': pokemon.ivs[2] = parseInt(value); break;
                    case 'SpA': pokemon.ivs[3] = parseInt(value); break;
                    case 'SpD': pokemon.ivs[4] = parseInt(value); break;
                    case 'Spe': pokemon.ivs[5] = parseInt(value); break;
                }
            }
        } else if (line.endsWith(' Nature')) {
            pokemon.nature = line.split(' ')[0];
        } else if (line.startsWith('- ')) {
            pokemon.moves.push(line.substring(2));
        }
    }

    if (Object.keys(pokemon).length) {
        team.push(pokemon);
    }

    return { team: team };
}

function loadSavedTeams() {
    const selectBox = $("#savedTeams");
    selectBox.empty();  // Remove all options
    selectBox.append('<option value="--Select Saved Team--">--Select Saved Team--</option>');
    
    for(let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        
        try {
            const parsedValue = JSON.parse(value);
            
            // Check if the parsed value has a 'team' key
            if(parsedValue.hasOwnProperty('team')) {
                selectBox.append(`<option value="${key}">${key}</option>`);
            }
        } catch(e) {
            // If there's an error parsing the value (e.g. it's not valid JSON), simply continue to the next item
            continue;
        }
    }
}

function getCurrentTeam() {
    const slots = document.querySelectorAll('.pokemon-slot');
    const teamMembers = [];

    slots.forEach(slot => {
        const pokemon = {
            species: slot.querySelector('.species-dropdown').value,
            nickname: slot.querySelector('.nickname-input').value,
            level: slot.querySelector('.level-input').value,
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
            $(slot.querySelector('.species-dropdown')).val(pokemon.species).trigger('change').trigger('select2:select');
            slot.querySelector('.nickname-input').value = pokemon.nickname;
            slot.querySelector('.level-input').value = pokemon.level;
            $(slot.querySelector('.item-dropdown')).val(pokemon.item).trigger('change').trigger('select2:select');
            $(slot.querySelector('.ability-dropdown')).val(pokemon.ability).trigger('change').trigger('select2:select');
            slot.querySelector('.gender-dropdown').value = pokemon.gender;

            const ivInputs = slot.querySelectorAll('.ivs input');
            ivInputs.forEach((input, ivIndex) => {
                input.value = pokemon.ivs[ivIndex];
            });

            const evInputs = slot.querySelectorAll('.evs input');
            evInputs.forEach((input, evIndex) => {
                input.value = pokemon.evs[evIndex];
            });

            $(slot.querySelector('select[name="move1"]')).val(pokemon.moves[0]).trigger('change').trigger('select2:select');
            $(slot.querySelector('select[name="move2"]')).val(pokemon.moves[1]).trigger('change').trigger('select2:select');
            $(slot.querySelector('select[name="move3"]')).val(pokemon.moves[2]).trigger('change').trigger('select2:select');
            $(slot.querySelector('select[name="move4"]')).val(pokemon.moves[3]).trigger('change').trigger('select2:select');

            $(slot.querySelector('.nature-dropdown')).val(pokemon.nature).trigger('change').trigger('select2:select');

        }

    });

    // After populating the slots with saved data, you may need to refresh any visual components 
    // like dropdown menus or other dynamic elements that are affected by the above changes.
}


initializePokemonSlots();

$(document).ready(function() {
    $("#importTeam").click(function() {
        // Show the custom modal
        $('#importShowdownPrompt').modal('show');
    });
    
    $("#submitimportShowdownPrompt").click(function() {
        const showdownFormat = $("#importShowdownPromptInput").val();
        // console.log(showdownFormat);
        if (showdownFormat) {
            const teamData = showdownToJson(showdownFormat);
            console.log(teamData);
            loadTeamData(teamData);
        }
        $('#importShowdownPrompt').modal('hide');
    });    
    
    // Copy the current team to clipboard in Showdown format
    $("#exportTeam").click(function() {
        // Assuming 'exportToPokemonShowdownFormat()' converts your current team data to the desired string format
        // const showdownFormat = exportToPokemonShowdownFormat();
        // navigator.clipboard.writeText(showdownFormat).then(function() {
        //     alert('Team copied to clipboard!');
        // }, function(err) {
        //     console.error('Could not copy text: ', err);
        // });
    });

    // Save current team to browser storage
    $("#saveTeam").click(function() {
        const teamName = $("#teamName").val();
        if(!teamName) {
            alert("Please enter a team name!");
            return;
        }
        // Assuming you have a function 'getCurrentTeam()' that retrieves the current team data
        const teamData = getCurrentTeam();
        localStorage.setItem(teamName, JSON.stringify(teamData));
        // Refresh the list of saved teams
        //loadSavedTeams();
        const selectBox = $("#savedTeams");
        selectBox.append('<option value="' + teamName + '">' + teamName + '</option>');
        $(selectBox).val(teamName).trigger('change').trigger('select2:select');
    });
    

    // Load a saved team
    $("#loadTeam").click(function() {
        const selectedTeamName = $("#savedTeams").val();
        
        // Check if the selected name isn't the default text
        if (selectedTeamName === "--Select Saved Team--") {
            // alert("Please select a valid team!");  // Optional: Alert the user to choose a valid team.
            return;  // Exit the function early
        }
        
        $("#teamName").val(selectedTeamName);

        const teamDataString = localStorage.getItem(selectedTeamName);
        if(teamDataString) {
            const teamData = JSON.parse(teamDataString);
            // Assuming you have a function 'loadTeamData()' that sets the current team to the provided data
            loadTeamData(teamData);
        }
    });
    
    

    // Delete a saved team
    $("#deleteTeam").click(function() {
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
    
    
});

// Call this when the document is ready:
loadSavedTeams();