const input = document.querySelector ("#pokeName");
const button = document.querySelector("#pkBtn");
const contenedor = document.querySelector('#pokeImg');


button.addEventListener('click', (e) => {
    e.preventDefault;
    buscarPoke(input.value);
    console.log('hola');
});

function buscarPoke(pokemon){
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((res) => res.json())
    .then((data) => {
        buscarPoke(data);
    });
}

function sacarPoke(pokemon) {
    const img = document.createElement('img');
    img.src = pokemon.sprites.front_default;

    const name = document.createElement('h3');
    name.textContent=pokemon.name;

    const conte = document.createElement('div');
    conte.appendChild(img);
    conte.appendChild(name);
    contenedor.appendChild(div);
}

