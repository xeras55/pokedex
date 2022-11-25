

const validar = () => {
    if( document.getElementById('colorofP0')) {
        console.log('aaaaa1');
        validar1();
    }else {
        console.log('aaaaa2');
        fetchPokemon();
        }
}

const validar1 = () => {
    x();

}

// const validar = () => {
//     x();
    
// }




const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            // console.log(res);
            pokeImage("./pikachu-sad.gif")
        }
        else { 
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImageContainer = data.sprites.front_default;
            let abilities = data.abilities;
            let move = data.moves;
            let type = data.types;
            let pokeNames = data.name;
            let pokeId = data.id;
            let pokeHe =  data.height;
            let pokeWi = data.weight;
            let hpBase = data.stats;
            let attackBase = data.stats;
            let defenseBase = data.stats;
            let specialAttackBase = data.stats;
            let specialDefenseBase = data.stats;
            let speedBase = data.stats;
            pokeSpeed(speedBase);
            pokeSpDf(specialDefenseBase);
            pokeSpAt(specialAttackBase);
            pokeAta(attackBase);
            pokeDef(defenseBase);
            pokeHp(hpBase);
            pokeTypes(type);
            pokeHeight(pokeHe);
            pokeWeight(pokeWi);
            pokeMoves(move);
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
//------------------añadir todos los valores del poke----------------------------------------
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
    const pokeHP1 = document.getElementById("containH");
    const hpData = stats.map((item) => item.base_stat);
    // console.log(hpData);
    let theOne = hpData[0];
    //console.log(theOne);
    const createHp = document.createElement('p');
    createHp.id = 'colorOfHp';
    createHp.textContent = theOne;
    pokeHP1.appendChild(createHp);
}
const pokeAta = (stats) => {
    const pokeAtt = document.getElementById("containA");
    const attackData = stats.map((item) => item.base_stat);
    let theOneA1 = attackData[1]
    const createAtt = document.createElement('p');
    createAtt.id = 'colorOfAtt';
    createAtt.textContent = theOneA1;
    pokeAtt.appendChild(createAtt);
}

const pokeDef = (stats) => {
    const pokeDeff = document.getElementById("containD");
    const deffData = stats.map((item) => item.base_stat);
    let theOneD1 = deffData[2]
    const createDeff = document.createElement('p');
    createDeff.id = 'colorOfDeff';
    createDeff.textContent = theOneD1;
    pokeDeff.appendChild(createDeff);
}


const pokeSpAt = (stats) => {
    const pokeSpA = document.getElementById("containSa");
    const spAtData = stats.map((item) => item.base_stat);
    let theOneSpA1 = spAtData[3]
    const createSpAt = document.createElement('p');
    createSpAt.id = 'colorOfSpAt';
    createSpAt.textContent = theOneSpA1;
    pokeSpA.appendChild(createSpAt);
}
const pokeSpDf = (stats) => {
    const pokeSpD = document.getElementById("containSd");
    const spDfData = stats.map((item) => item.base_stat);
    let theOneSpD1 = spDfData[4]
    const createSpDf = document.createElement('p');
    createSpDf.id = 'colorOfSpDf';
    createSpDf.textContent = theOneSpD1;
    pokeSpD.appendChild(createSpDf);
}

const pokeSpeed = (stats) => {
    const pokeSpe = document.getElementById("containSp");
    const speedData = stats.map((item) => item.base_stat);
    let theOneSpee1 = speedData[5]
    const createSpee = document.createElement('p');
    createSpee.id = 'colorOfSpee';
    createSpee.textContent = theOneSpee1;
    pokeSpe.appendChild(createSpee);
}


const pokeMoves = (moves) => {
    const pokeMoves = document.getElementById("move");
    const movesName = moves.map((item) => item.move.name);
    createMov = document.createElement('p');
    createMov.id = 'colorOFMove';
    createMov.textContent = movesName;
    pokeMoves.appendChild(createMov);
    move.style.visibility = "hidden"; 

}

//----------------------- funciones para calcuilar el peso y medida del poke -----------------------------------------
const convertH = (heightData) => {
    let result = heightData / 10;
    return result;
} 

const convertW = (weightData) => {
    let resultW = weightData / 10;
    return resultW;
} 
//-----------------------------esconder los stats para mostrar los movimientos----------------------
const hidde = () => {
    const hidde1 = document.getElementById('statsBase');
    const hiddeB = document.getElementById('natureType');
    hiddeB.style.visibility = "hidden"; 
    hidde1.style.visibility = "hidden"; 
    const unHidde = document.getElementById('move');
    unHidde.style.visibility = ""; 
}

//---------------------------------reaparecer los stats y esconder los movimientos--------------------------
const showAgain = () => {
    const unhidde1 = document.getElementById('statsBase');
    const unhiddeB = document.getElementById('natureType');
    unhiddeB.style.visibility = ""; 
    unhidde1.style.visibility = ""; 
    const Hidde = document.getElementById('move');
    Hidde.style.visibility = "hidden"; 
}


//---------------------------------------------------------------------------
//----------------------------search again--------------------------------------



const x = () => {
    const clearNumber = document.getElementById('pokeId');
    const clearName = document.getElementById('pokeNames');
    const clearNature = document.getElementById('natureType');
    const clearStatsHp = document.getElementById('containH');
    const clearStatsAttack = document.getElementById('containA');
    const clearStatsDefense = document.getElementById('containD');
    const clearStatsSpeAta = document.getElementById('containSa');
    const clearStatsSpeDef = document.getElementById('containSd');
    const clearStatsSpeed = document.getElementById('containSp');
    const clearMove = document.getElementById('move');
    const clearWeig = document.getElementById('containerStats2');
    const clearHeig = document.getElementById('containerStats1');
    
    clearNumber.textContent ='';
    clearName.textContent ='';
    clearNature.textContent ='';
    clearStatsHp.textContent ='';
    clearStatsAttack.textContent ='';
    clearStatsDefense.textContent ='';
    clearStatsSpeAta.textContent ='';
    clearStatsSpeDef.textContent ='';
    clearStatsSpeed.textContent ='';
    clearName.textContent ='';
    clearMove.textContent = '';
    borrarAlv;
    clearWeig.textContent = '';
    clearHeig.textContent = '';
    var d = document.getElementById('pokeImageContainer');
    var d_nested = document.getElementById('colorOfImg');
    var borrarAlv = d.removeChild(d_nested);
    fetchPokemon();
    console.log('asdasd');
    
}

//------------------------------------------------------------------------------
// const elem = document.getElementById('.natureType').style.visibility = "hidden"; 
// const btnHidd = document.querySelector('.lineDer1');
//     btnHidd.addEventListener("click", () => {
//     elem;
//     });

// const pokeData = (abilities) =>{
//     const pokeAbilities = document.getElementById("abilities");
//     const abilitiesName = abilities.map((item) => item.ability.name);
//     console.log(abilitiesName);
//     pokeAbilities.innerHTML =  abilitiesName;
// }




// const pokeTypes = (types) => {
//     const pokeTipos = document.getElementById("Type");
//     const typesName = types.map((item) => item.type.name);
//     pokeTipos.innerHTML = typesName;
// }
