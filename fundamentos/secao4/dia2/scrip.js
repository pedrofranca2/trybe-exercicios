const test = document.getElementById('where-are-you');

const parentNew = test.parentElement;
parentNew.style.color = 'red';

const newText = parentNew.parentNode;
newText.innerText = "Adicionado texto";

const firstChild = parentNew.firstElementChild;
console.log(firstChild);