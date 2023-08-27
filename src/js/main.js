const pokemonDropdowns = document.querySelectorAll(".pokemon-dropdown");

pokemonDropdowns.forEach(dropdown => {
    pokemon.forEach(poke => {
        const option = document.createElement("option");
        option.value = poke.id;
        option.innerText = poke.name;
        dropdown.appendChild(option);
    });
});
