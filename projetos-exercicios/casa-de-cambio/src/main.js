import Swal from "sweetalert2";

const inputCoin = document.querySelector("#inputCoin");
const btn = document.querySelector("#btnSearch");
const titleText = document.querySelector("#referenceValue");
const listValues = document.querySelector("#listValues");

function getValues(coin) {
    return fetch(`https://economia.awesomeapi.com.br/json/daily/${coin}/30`)
    .then((response) => response.json())
    .then((data) => {
        return data.map(values => values.ask)
    })
}


btn.addEventListener('click', (event) => {
    event.preventDefault();
    const coin = inputCoin.value.toUpperCase();
    
    if (!coin) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Você precisa passar uma moeda',
        })
        return;
    }
    
    titleText.innerHTML = `Valores referentes a 1 ${coin}`;

    getValues(coin)
    .then((response) => {
        listValues.innerHTML = "";
        const arrayValues = response;
        arrayValues.forEach(element => {
            const liValues = document.createElement("li");
            liValues.innerHTML = element;
            listValues.appendChild(liValues);
        });
    })

})