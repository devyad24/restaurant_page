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

    homeLink.classList.add('selectedLink');

    homeLink.addEventListener('click', () => {
        content.replaceChild(home(), content.lastChild);
        if (!(homeLink.classList.contains('selectedLink'))) {
            homeLink.classList.add('selectedLink');
        }
        menuLink.classList.remove('selectedLink');
        contactLink.classList.remove('selectedLink');
    });

    menuLink.addEventListener('click', () => {
        content.replaceChild(menu(), content.lastChild);
        homeLink.classList.remove('selectedLink');
        menuLink.classList.add('selectedLink');
        contactLink.classList.remove('selectedLink');
    });

    contactLink.addEventListener('click', () => {
        content.replaceChild(contact(), content.lastChild);
        homeLink.classList.remove('selectedLink');
        menuLink.classList.remove('selectedLink');
        contactLink.classList.add('selectedLink');
    });
}

init();
tabSwitch();
