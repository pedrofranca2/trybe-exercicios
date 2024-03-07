const readline = require('readline-sync');

function imcCalculate(weight, height) {
    const imc = weight / ((height/100) ** 2);
    return imc;
}

const BMI_MAX_AND_MIN = {
    'Underweight': {
      minBMI: 0,
      maxBMI: 18.4,
    },
    'Normal Weight': {
      minBMI: 18.5,
      maxBMI: 24.9,
    },
    'Overweight': {
      minBMI: 25,
      maxBMI: 29.9,
    },
    'Obese Class I': {
      minBMI: 30.0,
      maxBMI: 34.9,
    },
    'Obese Class II': {
      minBMI: 35,
      maxBMI: 39.9,
    },
    'Obese Class III': {
      minBMI: 40,
      maxBMI: 100, // Um valor default máximo qualquer, impossível de alcançar no imc.
    },
  };

  function handleBMIResult(bmi) {
    const statuses = Object.keys(BMI_MAX_AND_MIN); 
    const resultFind = statuses.find((status) => {
      const { maxBMI, minBMI } = BMI_MAX_AND_MIN[status]; 

      return bmi >= minBMI && bmi <= maxBMI;
    });
  
    return resultFind;
  }
  
function main() {
    const weight = readline.questionFloat('Qual é o seu peso(kg) ');
    const height = readline.questionInt('Qual é a sua altura(cm) ');

    const imc = imcCalculate(weight, height);
    const bmiResult = handleBMIResult(imc);

    console.log(`IMC: ${imc.toFixed(2)}`);
    console.log(bmiResult);
}

main();