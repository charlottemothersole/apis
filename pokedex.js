const fetchPokemon = require('./api.js');

class Pokedex {
    constructor() {
        this.allPokemon = [];
    }

    catch(pokemonName) {
        return fetchPokemon(pokemonName)
        .then((pokemonObject) => {
            this.allPokemon.push(pokemonObject);
        })
    }

    all() {
        return this.allPokemon;
    }
};



module.exports = Pokedex;