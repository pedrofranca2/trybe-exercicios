import Swal from 'sweetalert2';

const API_BASE = 'https://akabab.github.io/superhero-api/api';

const randomNumber = () => Math. floor(Math. random() * 1000)


const btnLoadHeroe = document.querySelector('#loadHeroe');
const imgHeroe = document.querySelector('#imgHeroe');
const footer = document.querySelector('#nameHeroes');



btnLoadHeroe.addEventListener('click', (event) => {
  event.preventDefault();
  
fetch(`${API_BASE}/id/${randomNumber()}.json`)
  .then((response) => response.json())
  .then((data) => {
    imgHeroe.src = data.images.md;
    footer.innerHTML = data.name;
  })
  .catch((error) => Swal.fire({
    title: 'Hero not found',
      text: error.message,
      icon: 'error',
      confirmButtonText: 'Cool',
  }
  ))
  })
