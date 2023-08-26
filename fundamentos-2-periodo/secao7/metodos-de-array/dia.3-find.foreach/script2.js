const countries = require('./data');

// Adicione a propriedade planet com o valor Earth em todos os países diretamente no array countries.


const addProperty = countries.forEach((countrie) => {
    countrie.planet = 'Earth';
})

// console.log(countries);

// Para cada país, crie um objeto apenas com as informação do nome, código da moeda e nome da moeda. Essas informações devem ser armazenadas em um novo array. Faça esse exercício usando o método forEach, não vale map. 😜



const countryArray =[];
    countries.forEach((countrie) => {
        const objectOutput = {
            name: countrie.name,
            currencyCode: countrie.currencies[0].code,
            currencyName: countrie.currencies[0].name,
        };
        countryArray.push(objectOutput);
    })
    
// console.log(countryArray);

// Escreva uma função chamada findCountry que recebe dois parâmetros: o array de países e o nome do país desejado. Ao receber esses valores, a função deve retornar o elemento do país desejado. Caso não seja encontrado, a função deve lançar um erro com a mensagem: “País não encontrado!”.

const findCountry = (countries, countryName) => {
    const countrieFound = countries.find((country) => country.name === countryName)
    return countrieFound;
} 

// console.log(findCountry(countries, 'Brazil'));

const addGermanyToCountries = () => {
    const copyContries = [...countries];
    const newCountry = {
        name: 'Germany',
        region: 'Europe',
        currencies: [{ code: 'EUR', name: 'Euro' }],
        capital: 'Berlin',
        population: 83190556,
        area: 357386
      };
    const finalObjectWithGermany = [...copyContries, ...[newCountry]]

    return finalObjectWithGermany;
}

// console.log(addGermanyToCountries());

// Desenvolva uma solução para percorrer o array countries e construir uma string para cada país com informações e formatação específicas. As propriedades são passadas como argumentos para a função buildString e adicionadas à string final. A string deverá ser construída com as propriedades name, capital, currencies.code e currencies.name separadas por um -.

const buildString = ()=> {
    countries.forEach((country) => {
        
        const stringOutput = `${country.name} - ${country.capital} - ${country.currencies[0].code} - ${country.currencies[0].name}`;
        
        
        console.log(stringOutput);
    })


  
}
buildString()