const data = require('./data');
// Dado um array de temperaturas em graus Celsius, crie uma função que retorne um novo array com as temperaturas convertidas para Fahrenheit. A fórmula de conversão é: Fahrenheit = (Celsius * 9/5) + 32

// Temperaturas em graus Celsius
const temperaturesCelsius = [23, 10, 32, 21, 47];

const convertInFarenheit = () => {
    const temperatureFahrenheit = temperaturesCelsius.map((tempratureCelsius) => {
        return (tempratureCelsius * 9/5) + 32;
    })
    return temperatureFahrenheit;
}
// console.log(convertInFarenheit());

// Dado um array de números, crie uma função que retorne um novo array com as raízes quadradas dos números. No entanto, se um número for negativo, a função deve substituí-lo por NaN (Não é um Número).

const numbers = [4, 9, -1, 16, -5, 25];

const raizQuadrada = () => {
    const numbersRaiz = numbers.map((number) => {
        return Math.sqrt(number);
    })
    return numbersRaiz;
}

// console.log(raizQuadrada());


//   Implemente a função formatedBookNames que deve retornar um array de strings no formato: Nome do livro - Gênero - Nome da pessoa autora.

const formatedBookNames = () => {
    const eachBook = data.books.map((book) => {
        return `${book.name} - ${book.genre} - ${book.author.name}`;    
    })

    return eachBook;
}

// console.log(formatedBookNames());