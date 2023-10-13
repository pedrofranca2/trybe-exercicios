const API_DOG = 'https://dog.ceo/api/breeds/image/random';
const API_CAT = 'https://api.thecatapi.com/v1/images/search';

const btnDog = document.querySelector("#random-dog");
const btnCat = document.querySelector("#random-cat");
const btnSurprise = document.querySelector("#surprise");
const imgRandom = document.querySelector("#img");

btnDog.addEventListener('click', (event) => {
  event.preventDefault();
  fetch(API_DOG)
    .then((res) => res.json())
    .then((data) => {
      imgRandom.src = data.message;
    });
});

btnCat.addEventListener('click', (event) => {
  event.preventDefault();
  fetch(API_CAT)
  .then((res) => res.json())
  .then((data) => {
    imgRandom.src = data[0].url;
  });
});

btnSurprise.addEventListener('click', (event) => {
  event.preventDefault();
  Promise.any([
    fetch(API_DOG),
    fetch(API_CAT)
  ])
  .then((res) => res.json())
  .then((data) => {
    const petURL = data.message || data[0].url;

    imgRandom.src = petURL;
  });
});
