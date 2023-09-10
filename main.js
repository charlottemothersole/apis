// const fetchPokemon = require('./api.js');
// fetchPokemon('charizard');

const fetchPokemon = require('./api');
fetchPokemon('pikachu')
.then((pokemon) => console.log(pokemon))