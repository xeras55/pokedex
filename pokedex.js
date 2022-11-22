
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
            //console.log(data);
            let pokeImageContainer = data.sprites.front_shiny;
            let abilities = data.abilities;
            let move = data.moves;
            let type = data.types;
            let pokeNames = data.name;
            let pokeId = data.id;
            let pokeHe =  data.height;
            let pokeWi = data.weight;
            let hpBase = data.stats;
            let attackBase = data.stats;
            pokeAta(attackBase);
            pokeHp(hpBase);
            pokeTypes(type);
            pokeHeight(pokeHe);
            pokeWeight(pokeWi);
            // //pokeMoves(move);
            // pokeData(abilities);
            pokeImage(pokeImageContainer);
            nameOfPoke(pokeNames);
            idOfPoke(pokeId);
            // console.log(pokeImg);
        }
    });
}

// const pokeImage = (url) => {
//     const pokePhoto = document.getElementById("pokeImg");
//     pokePhoto.src = url;
// }
const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImageContainer");
    const li = document.createElement('img');
    li.id = "colorOfImg";
    li.src = url;
    pokePhoto.appendChild(li);
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
const idOfPoke = (id) =>{
    const pkId = document.getElementById('pokeId');
    const ides = id;
    const createId = document.createElement('p');
    createId.id = "colorOfP";
    createId.textContent = '#' + ' ' +ides;
    pkId.appendChild(createId);
}

const pokeTypes = (types) => {
    const pokeTipos = document.getElementById("natureType");
    const typesName = types.map((item) => item.type.name);
    const createTypes = document.createElement('p');
    createTypes.id = 'colorOfT';
    createTypes.textContent = typesName;
    pokeTipos.appendChild(createTypes);
}
const pokeHeight = (height) => {
    const pokeH = document.getElementById("containerStats1");
    const heightData = height;
    const createHeight = document.createElement('p');
    createHeight.id = 'colorOfHe';
    createHeight.textContent = convertH(heightData) + " " + 'Metros';
    pokeH.appendChild(createHeight);
}

const pokeWeight = (weight) => {
    const pokeW = document.getElementById("containerStats2");
    const weightData = weight;
    const createWeight = document.createElement('p');
    createWeight.id = 'colorOfWe';
    createWeight.textContent = convertW(weightData) + " " + 'KG';
    pokeW.appendChild(createWeight);
}

const pokeHp = (stats) => {
    // get's HP of the poke 
    const pokeHP = document.getElementById("hpBase");
    const hpData = stats.map((item1) => item1.base_stat);
    // console.log(hpData);
    let theOne = hpData[0];
    //console.log(theOne);
    const createHp = document.createElement('p');
    createHp.id = 'colorOfHp';
    createHp.textContent = theOne;
    pokeHP.appendChild(createHp);
}
const pokeAta = (stats) => {
    const pokeAtt = document.getElementById("attackBase");
    const attackData = stats.map((item1) => item1.base_stat);
    let theOneA = attackData[1]
}

const convertH = (heightData) => {
    let result = heightData / 10;
    return result;
} 

const convertW = (weightData) => {
    let resultW = weightData / 10;
    return resultW;
} 

// const pokeData = (abilities) =>{
//     const pokeAbilities = document.getElementById("abilities");
//     const abilitiesName = abilities.map((item) => item.ability.name);
//     console.log(abilitiesName);
//     pokeAbilities.innerHTML =  abilitiesName;
// }

// // const pokeMoves = (moves) => {
// //     const pokeMoves = document.getElementById("move");
// //     const movesName = moves.map((item) => item.move.name);
// //     pokeMoves.innerHTML = movesName;
// // }


// const pokeTypes = (types) => {
//     const pokeTipos = document.getElementById("Type");
//     const typesName = types.map((item) => item.type.name);
//     pokeTipos.innerHTML = typesName;
// }
