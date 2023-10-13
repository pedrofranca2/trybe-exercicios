import Swal from "sweetalert2";

const API_BASE = "https://akabab.github.io/superhero-api/api";

const btn = document.querySelector("#button");
const imgHeroe = document.querySelector("#img");
const nameText = document.querySelector("#name");

const MAX_HEROES = 1000;

btn.addEventListener('click', (event) => {
    event.preventDefault();
    const id = Math.floor(Math.random() * MAX_HEROES);

fetch(`${API_BASE}/id/${id}.json`)
    .then((response) => response.json())
    .then((data) => {
        imgHeroe.src = data.images.md;
        nameText.innerHTML = data.name;
    })
    .catch((error) => Swal.fire({
        icon: 'error',
        title: 'Hero not found, try again',
        text: error.message,
        onfirmButtonText: 'Cool',
      }));
});


