const fetchPokemon = (pokemonName) => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((response) => response.json())
    .then((data) => {
        // let types = [];
        // for(let i=0 ; i < data['types'].length ; i++) {
        //     const type = data['types'][i]['type']['name'];
        //     types.push(type);
        // }
        const pokemon = {
            'name': `${pokemonName}`,
            'id' : data['id'],
            'height': data['height'],
            'weight': data['weight'],
            'types': data['types'].map((item) => {
                return item['type']['name'];
            })
        };
        // console.log(pokemon);
        return pokemon;
    });   
};
// fetchPokemon('charmander');
// console.log(fetchPokemon('charmander'));
module.exports = fetchPokemon;
