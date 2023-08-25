const pokemons = require('./data');

// Utilizando o método filter e object destructuring, crie uma função filterStrongPokemons que retorna um novo array contendo apenas os Pokémons com nível superior a 30.
const filterStrongPokemons = () => {
    return pokemons.filter(({ level }) => level > 30);
    }

filterStrongPokemons();


// Utilizando os métodos filter e map encadeados, crie uma função getStrongPokemonNames que retorna um novo array contendo apenas os nomes dos Pokémons com nível superior a 50.
const getStrongPokemonNames = () => {
    const pokemonMoreThan30 = pokemons.filter(({ level }) => level > 50);
    const mapPokemon = pokemonMoreThan30.map ((pokemon) => {
       return pokemon.name;
    })

    return mapPokemon;
}
getStrongPokemonNames();

// Utilize o método sort para ordenar o array de Pokémons em ordem crescente com base no nível de cada Pokémon.
// const pokemonSorted = pokemons.sort((a,b) => a.level - b.level);
// console.log(pokemonSorted);


// Utilizando o método sort e default destructuring, crie uma função chamada sortPokemons que retorna o array de Pokémons ordenado por nível em ordem decrescente. Caso dois Pokémons tenham o mesmo nível, a ordenação deve ser feita pelo nome em ordem alfabética crescente.

const sortPokemons = () => {
return pokemons.sort((a,b) => b.level - a.level);

};

console.log(sortPokemons());