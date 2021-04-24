import './style.css';

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
