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

{
    books: [
      {
        id: 1,
        name: 'As Crônicas de Gelo e Fogo',
        genre: 'Fantasia',
        author: {
          name: 'George R. R. Martin',
          birthYear: 1948,
        },
        releaseYear: 1991,
      },
      {
        id: 2,
        name: 'O Senhor dos Anéis',
        genre: 'Fantasia',
        author: {
          name: 'J. R. R. Tolkien',
          birthYear: 1892,
        },
        releaseYear: 1954,
      },
      {
        id: 3,
        name: 'Fundação',
        genre: 'Ficção Científica',
        author: {
          name: 'Isaac Asimov',
          birthYear: 1920,
        },
        releaseYear: 1951,
      },
      {
        id: 4,
        name: 'Duna',
        genre: 'Ficção Científica',
        author: {
          name: 'Frank Herbert',
          birthYear: 1920,
        },
        releaseYear: 1965,
      },
      {
        id: 5,
        name: 'A Coisa',
        genre: 'Terror',
        author: {
          name: 'Stephen King',
          birthYear: 1947,
        },
        releaseYear: 1986,
      },
    ],
  };