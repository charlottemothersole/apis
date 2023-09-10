const fetchPokemon = require('./api.js');
const Pokedex = require('./pokedex.js');

describe('fetchPokemon', () => {
    it('returns a promise of the useful pokemon data', (done) => {
      fetchPokemon('charizard')
        .then((pokemon) => {
          expect(pokemon.id).toBe(6);
          done();
        });
    });
});

// describe('Pokedex class', () => {
//     it('pokedex starts with allPokemon as empty list', () => {
//         const pokedex  = new Pokedex();
//         expect(pokedex.allPokemon).toEqual([]);
//     });
//     it('catch() adds a pokemon to the allPokemon list', () => {
//         const pokedex1  = new Pokedex();
//         pokedex1.catch('pikachu')
//         .then(() => {
//             // console.log(pokedex.all());
//             // console.log(pokedex.allPokemon);
//             expect(pokedex1.allPokemon).toEqual([{
//                 name: 'pikachu',
//                 id: 25,
//                 height: 4,
//                 weight: 60,
//                 types: [ 'electric' ]
//             }]);
//         });
        
//     });
    
//     it('catch() adds another pokemon to the allPokemon list', () => {
//         const pokedex2  = new Pokedex();
//         pokedex2.catch('pikachu')
//         .then(() => {
//             pokedex2.catch('jigglypuff')
//             .then(() => {
//                 expect(pokedex2.allPokemon).toEqual([
//                     {
//                         name: 'pikachu',
//                         id: 25,
//                         height: 4,
//                         weight: 60,
//                         types: [ 'electric' ]
//                     },
//                     {
//                         name: 'jigglypuff',
//                         id: 39,
//                         height: 5,
//                         weight: 55,
//                         types: [ 'normal', 'fairy' ]
//                     }
//                 ]);
//             });
//         })
        
//     });
// })

describe('test starts with empty list', () => {
    it('', () => {
        const pokedex  = new Pokedex();
        expect(pokedex.allPokemon).toEqual([]);
    });
    it('test catch method', async () => {
        const pokedex  = new Pokedex();
        await pokedex.catch('pikachu');
        expect(pokedex.all()).toEqual([
            {
                name: 'pikachu',
                id: 25,
                height: 4,
                weight: 60,
                types: [ 'electric' ]
            }
        ]);
    });
    it('test all method returns multiple', async () => {
        const pokedex = new Pokedex();
        await pokedex.catch('pikachu');
        await pokedex.catch('jigglypuff');
        expect(pokedex.all()).toEqual([
            {
                name: 'pikachu',
                id: 25,
                height: 4,
                weight: 60,
                types: [ 'electric' ]
            },
            {
                name: 'jigglypuff',
                id: 39,
                height: 5,
                weight: 55,
                types: [ 'normal', 'fairy' ]
            }
        ]);
    }) 
})

