const pokemonDropdowns = document.querySelectorAll(".species-dropdown");

pokemonDropdowns.forEach(dropdown => {
    pokemonData.forEach(poke => {
        const option = document.createElement("option");
        option.value = poke.id;
        option.innerText = poke.name;
        dropdown.appendChild(option);
    });
});
