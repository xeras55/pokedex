const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./pikachu-sad.gif")
        }
        else { 
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_shiny;
            let abilities = data.abilities;
            let move = data.moves;
            let type = data.types;
            pokeTypes(type);
            //pokeMoves(move);
            pokeData(abilities);
            pokeImage(pokeImg);
            console.log(pokeImg);
        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

const pokeData = (abilities) =>{
    const pokeAbilities = document.getElementById("abilities");
    const abilitiesName = abilities.map((item) => item.ability.name);
    console.log(abilitiesName);
    pokeAbilities.innerHTML =  abilitiesName;
}

// const pokeMoves = (moves) => {
//     const pokeMoves = document.getElementById("move");
//     const movesName = moves.map((item) => item.move.name);
//     pokeMoves.innerHTML = movesName;
// }
const pokeTypes = (types) => {
    const pokeTipos = document.getElementById("type");
    const typesName = types.map((item) => item.type.name);
    pokeTipos.innerHTML = typesName;
}

