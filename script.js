const pokemonPicture = document.getElementById("pokemonPicture");
const pokemonName = document.getElementById("pokemonName");
const pokemonData = document.getElementById("pokemonData");
const pokemonType = document.getElementById("pokemonType");
const backButton = document.getElementById("backButton");
const forwardButton = document.getElementById("forwardButton");
const infoButton = document.getElementById("infoButton");
const movesButton = document.getElementById("movesButton");

const colors = {
    normal: "#A8A77A",
    fire: "#EE8130",
    water: "#6390F0",
    electric: "#F7D02C",
    grass: "#7AC74C",
    ice: "#96D9D6",
    fighting: "#C22E28",
    poison: "#A33EA1",
    ground: "#E2BF65",
    flying: "#A98FF3",
    psychic: "#F95587",
    bug: "#A6B91A",
    rock: "#B6A136",
    ghost: "#735797",
    dragon: "#6F35FC",
    dark: "#705746",
    steel: "#B7B7CE",
    fairy: "#D685AD"
};

let id = 1;
setPokemonData(id);

async function setPokemonData(id) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();
    let height = data["height"] / 10;
    let weight = data["weight"] / 10;

    pokemonData.innerHTML = `
        <p>height: ${height}m</p>
        <p>weight: ${weight}kg</p>
        <p>hp: ${data["stats"][0]["base_stat"]}</p>
        <p>attack: ${data["stats"][1]["base_stat"]}</p>
        <p>defense: ${data["stats"][2]["base_stat"]}</p>
        <p>special-attack: ${data["stats"][3]["base_stat"]}</p>
        <p>special-defense: ${data["stats"][4]["base_stat"]}</p>
        <p>speed: ${data["stats"][5]["base_stat"]}</p>
    `;

    pokemonPicture.src = `${data["sprites"]["front_default"]}`;
    pokemonName.textContent = `${data["name"]}`;
    pokemonType.innerHTML = "";
    for (let i = 0; i < data["types"].length; i++) {
        pokemonType.innerHTML += `
        <div style="background-color: ${colors[data["types"][i]["type"]["name"]]};">
            <span>${data["types"][i]["type"]["name"]}</span>
        </div>`;
    }
}