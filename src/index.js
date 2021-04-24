import './style.css';
import { Layer } from './Layer/index';

console.log('funguju!');

const navBtnElm = document.querySelector('#nav-btn');
const navElm = document.querySelector('#nav');

navBtnElm.addEventListener('click', () => {
  navElm.classList.toggle('nav-closed');
});

const navLinkElm = document.querySelectorAll('.nav-link');
for (let i = i; i < navLinkElm.length; i++) {
  navLinkElm[i].addEventListener('click', () => {
    navElm.classList.toggle('nav-closed');
  });
}
/*úkol 4*/
const orderBtnElm = document.querySelector('#order-btn');
const drinkCupElm = document.querySelector('.drink__cup');
let ordered = false;

orderBtnElm.addEventListener('click', () => {
  if (!ordered) {
    drinkCupElm.classList.add('drink__cup--selected');
    orderBtnElm.textContent = 'Zrušit';
    ordered = true;
  } else {
    drinkCupElm.classList.remove('drink__cup--selected');
    orderBtnElm.textContent = 'Objednat';
    ordered = false;
  }
});

/*úkol 5*/

const drinkInfoElm = document.querySelector('#drink__info');
drinkInfoElm.innerHTML +=
  Layer({
    color: '#feeeca',
    label: 'mléčná pěna',
  }) +
  Layer({
    color: '#fed7b0',
    label: 'teplé mléko',
  }) +
  Layer({
    color: '#613916',
    label: 'espresso',
  });

const seznamIng = document.querySelectorAll('#drink__info');
for (let i = i; i < seznamIng.length; i++) {
  seznamIng[i].addEventListener('click', () => {
    seznamIng.classList.toggle('drinks-list');
  });
}
