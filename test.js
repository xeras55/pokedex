// console.log('Hola weones');


// let convertir = (n) => {
//     let resultado = n * 10;
//     return resultado;
// }
// console.log(convertir(10));







const validar = () => {
    const validacion = document.getElementById('pokeNames');
    let valid = validacion.value;
    if( valid == true ) {
        fetchPokemon();
    }else {
        validar1();
        }
}




// const validar = () => {
//     x();

// }

const validar1 = () => {
    x();

}









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
            let move = data.moves;
            pokeMoves(move);
            let pokeNames = data.name;
            nameOfPoke(pokeNames);
            let pokeWi = data.weight;
            pokeWeight(pokeWi);
        }
    });
}


const nameOfPoke = (name) => {
    const pkname = document.getElementById("pokeNames");
    const names = name;
    const createpknm = document.createElement('p');
    createpknm.id = "colorofP0";
    createpknm.textContent = names.toUpperCase();
    pkname.appendChild(createpknm);
    // console.log(name);
}

const pokeMoves = (moves) => {
    const pokeMoves = document.getElementById("move");
    const movesName = moves.map((item) => item.move.name);
    createMov = document.createElement('p');
    createMov.id = 'colorOFMove';
    createMov.textContent = movesName;
    pokeMoves.appendChild(createMov);

}

const x = () => {
    const clearName = document.getElementById('pokeNames');
    const clearMove = document.getElementById('move');
    const clearwei = document.getElementById('containerStats2');
    clearName.textContent ='';
    clearMove.textContent = '';
    clearwei.textContent = '';
    fetchPokemon();
}

const pokeWeight = (weight) => {
    const pokeW = document.getElementById("containerStats2");
    const weightData = weight;
    const createWeight = document.createElement('p');
    createWeight.id = 'colorOfWe';
    createWeight.textContent = weightData;
    pokeW.appendChild(createWeight);
}