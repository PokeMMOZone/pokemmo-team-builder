const container = document.getElementById("pokemonContainer");

function populateDropdown(dropdown) {
    pokemonData.forEach(poke => {
        const option = document.createElement("option");
        option.value = poke.id;
        option.innerText = poke.name;
        dropdown.appendChild(option);
    });
}

function createPokemonSlotStructure() {
    return `
    <select class="species-dropdown"></select>
    <img src="https://placehold.co/64x64" alt="Pokemon Image" class="pokemon-image">
    <input type="text" placeholder="Nickname" class="nickname-input">

    <div>
        <label>Level:</label>
        <input type="number" min="1" max="100" value="50" class="level-input" style="width: 60px;">
    </div>

    <div>
        <img src="https://placehold.co/40x40" alt="Item Image" class="item-icon">
        <select class="item-dropdown">
            <option value="dummyItem">Dummy Item</option>
        </select>
    </div>

    <div>
        <label>Ability:</label>
        <select class="ability-dropdown">
            <option value="dummyAbility">Dummy Ability</option>
        </select>
    </div>

    <div>
        <label>Nature:</label>
        <select class="nature-dropdown">
            <option value="dummyNature">Dummy Nature</option>
        </select>
    </div>

    <div>
        <label>Gender:</label>
        <select class="gender-dropdown">
            <option value="male" selected>Male</option>
            <option value="female">Female</option>
        </select>
    </div>

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
            <input type="number" min="0" max="31" value="31">
            <input type="number" min="0" max="31" value="31">
            <input type="number" min="0" max="31" value="31">
            <input type="number" min="0" max="31" value="31">
            <input type="number" min="0" max="31" value="31">
            <input type="number" min="0" max="31" value="31">
        </div>
        <div class="stat-column evs">
            <span>EVs</span>
            <input type="number" min="0" max="252" value="0">
            <input type="number" min="0" max="252" value="0">
            <input type="number" min="0" max="252" value="0">
            <input type="number" min="0" max="252" value="0">
            <input type="number" min="0" max="252" value="0">
            <input type="number" min="0" max="252" value="0">
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
    `;
}

function createPokemonSlot() {
    const slot = document.createElement("div");
    slot.className = "pokemon-slot col-md-4 col-sm-6";
    slot.innerHTML = createPokemonSlotStructure();

    container.appendChild(slot);

    const dropdown = slot.querySelector('.species-dropdown');
    populateDropdown(dropdown);
}

function initializePokemonSlots() {
    for (let i = 0; i < 6; i++) {
        createPokemonSlot();
    }
}

initializePokemonSlots();
