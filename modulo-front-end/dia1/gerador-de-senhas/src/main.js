import { nanoid } from 'nanoid';
import './style.css';
import copy from 'clipboard-copy';

const buttonPassword = document.querySelector('button');
const safePassword = document.querySelector('h2');

buttonPassword.addEventListener('click', () => {
  safePassword.innerHTML = nanoid();
  copy(safePassword.innerHTML);
});
