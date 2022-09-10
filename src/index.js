import { home, navfun } from './modules/home.js';
import menu from './modules/menu.js';
import contact from './modules/contact.js';

function init() {
    const content = document.querySelector('#content');
    content.appendChild(navfun());
    content.appendChild(home());
}

function tabSwitch() {
    const homeLink = document.querySelector('.homeLink');
    const menuLink = document.querySelector('.menuLink');
    const contactLink = document.querySelector('.contactLink');

    homeLink.addEventListener('click', () => {
        content.replaceChild(home(), content.lastChild);
    });

    menuLink.addEventListener('click', () => {
        content.replaceChild(menu(), content.lastChild);
    });

    contactLink.addEventListener('click', () => {
        content.replaceChild(contact(), content.lastChild);
    });
}

init();
tabSwitch();
