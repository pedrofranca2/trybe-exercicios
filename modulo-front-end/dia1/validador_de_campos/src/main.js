import validator from 'validator';

const inputValue = document.querySelector('#value');
const textFooter = document.querySelector('#footer');
const btnValidator = document.querySelector('#btnValidator');
const optionSelected = document.querySelector('#typeValue');

btnValidator.addEventListener('click', (event) => {
  event.preventDefault();

  const validatorValues = {
    email: validator.isEmail(inputValue.value),
    cpf: validator.isTaxID(inputValue.value, 'pt-BR'),
    url: validator.isURL(inputValue.value),
    date: validator.isDate(inputValue.value),
  };

  textFooter.innerHTML = `A validação retornou ${validatorValues[optionSelected.value]}`;
});
