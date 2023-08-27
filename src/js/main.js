const pokemonDropdowns = document.querySelectorAll(".species-dropdown");
const addSlotButton = document.getElementById("addSlot");
const removeSlotButton = document.getElementById("removeSlot");
const container = document.getElementById("pokemonContainer");

// Initial count for the Pokémon slots.
let slotCount = container.getElementsByClassName("pokemon-slot").length;

document.querySelectorAll('.species-dropdown').forEach(populateDropdown);

function populateDropdown(dropdown) {
    pokemonData.forEach(poke => {
        const option = document.createElement("option");
        option.value = poke.id;
        option.innerText = poke.name;
        dropdown.appendChild(option);
    });
}

addSlotButton.addEventListener("click", function() {
    if (slotCount < 6) {
        createPokemonSlot();
        slotCount++;

        // If we've reached the max number of slots, disable the "Add" button.
        if (slotCount === 6) {
            addSlotButton.disabled = true;
        }

        // Ensure the remove button is enabled if we have more than one slot.
        if (slotCount > 1) {
            removeSlotButton.disabled = false;
        }
    }
});


removeSlotButton.addEventListener("click", function() {
    if (slotCount > 1) {
        container.removeChild(container.getElementsByClassName("pokemon-slot")[slotCount - 1]);
        slotCount--;
    }

    // If we reach the min number of slots, disable the "Remove" button.
    if (slotCount === 1) {
        removeSlotButton.disabled = true;
    }

    // Ensure the add button is enabled if we have fewer than six slots.
    if (slotCount < 6) {
        addSlotButton.disabled = false;
    }
});

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
    <div class="ivs">
        HP: <input type="text"> Atk: <input type="text"> Def: <input type="text"> SpA: <input type="text"> SpD:
        <input type="text"> Spe: <input type="text">
    </div>
    <div class="evs">
        HP: <input type="text"> Atk: <input type="text"> Def: <input type="text"> SpA: <input type="text"> SpD:
        <input type="text"> Spe: <input type="text">
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
