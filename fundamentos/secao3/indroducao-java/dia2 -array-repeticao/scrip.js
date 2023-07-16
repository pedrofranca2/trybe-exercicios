const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultSoma = 0;
let bigger = numbers[0];
let countImpar = 0;

for (let index = 0; index < numbers.length; index += 1) {
   number = numbers[index]
   console.log (number);
   resultSoma = resultSoma + number;
   
    if (bigger < number) {
        bigger = number;
    }

    if (number % 2 === 1) {
        countImpar ++; 
    }
}

let media = resultSoma / numbers.length;

console.log ("A soma é: " + resultSoma);
console.log ("A média é: " + media);

if (media > 20) {
    console.log ("O valor da média é maior que 20")
} else {
    console.log ("O valor da média é menor que 20")
}

console.log ("O maior número do array é: " + bigger);

if (countImpar > 0) {
console.log ("A quantidade de números ímpar é: " + countImpar);
} else {
    console.log ("Nenhum valor ímpar encontrado");
}


