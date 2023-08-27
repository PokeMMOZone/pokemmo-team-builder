const container = document.getElementById("pokemonContainer");

// Initial count for the Pokémon slots. 
// This can be removed since we are initializing with 6 slots by default.
let slotCount = 6;

function populateDropdown(dropdown) {
    pokemonData.forEach(poke => {
        const option = document.createElement("option");
        option.value = poke.id;
        option.innerText = poke.name;
        dropdown.appendChild(option);
    });
}

function createPokemonSlot() {
    const slot = document.createElement("div");
    slot.className = "pokemon-slot";

    slot.innerHTML = `
    <select class="species-dropdown"></select>
    <img src="https://via.placeholder.com/64x64" alt="Pokemon Image" class="pokemon-image">
    <input type="text" placeholder="Level" class="level-input">
    <select class="item-dropdown">
        <option value="dummyItem">Dummy Item</option>
    </select>
    <select class="ability-dropdown">
        <option value="dummyAbility">Dummy Ability</option>
    </select>
    <select class="nature-dropdown">
        <option value="dummyNature">Dummy Nature</option>
    </select>
    
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
            <input type="text" value="31">
            <input type="text" value="31">
            <input type="text" value="31">
            <input type="text" value="31">
            <input type="text" value="31">
            <input type="text" value="31">
        </div>
        <div class="stat-column evs">
            <span>EVs</span>
            <input type="text" value="0">
            <input type="text" value="0">
            <input type="text" value="0">
            <input type="text" value="0">
            <input type="text" value="0">
            <input type="text" value="0">
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
        <select>
            <option value="dummyMove1">Dummy Move 1</option>
        </select>
        <select>
            <option value="dummyMove2">Dummy Move 2</option>
        </select>
        <select>
            <option value="dummyMove3">Dummy Move 3</option>
        </select>
        <select>
            <option value="dummyMove4">Dummy Move 4</option>
        </select>
    </div>
`;


    // Append the slot first, then populate its dropdown.
    container.appendChild(slot);

    // Find the dropdown within this slot and populate it.
    const dropdown = slot.querySelector('.species-dropdown');
    populateDropdown(dropdown);
}



// This function will initialize the Pokémon slots when the page loads
function initializePokemonSlots() {
    for (let i = 0; i < slotCount; i++) {
        createPokemonSlot();
    }
}

// Call the function to generate the slots on page load
initializePokemonSlots();
