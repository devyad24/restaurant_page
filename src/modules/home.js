import Donut from './../images/donut.jpg';
import './../styles/style.css';

function navfun(){
    const nav = document.createElement('nav');
    const navLinks = document.createElement('div');
    const logoDiv = document.createElement('div');
    const logo = document.createElement('p');
    const navHome = document.createElement('p');
    const navMenu = document.createElement('p');
    const navContact = document.createElement('p');

    navLinks.classList.add("navLinks");
    logoDiv.classList.add('logo');

    logoDiv.textContent = "Donk-E-Donuts";
    navHome.textContent = "Home";
    navMenu.textContent = "Menu";
    navContact.textContent = "Contact";

    logoDiv.appendChild(logo);
    navLinks.appendChild(navHome);
    navLinks.appendChild(navMenu);
    navLinks.appendChild(navContact);

    nav.appendChild(logoDiv);
    nav.appendChild(navLinks);

    return nav;
}
function home(){
    const homeDiv = document.createElement('div');
    const poster = document.createElement('div');
    poster.classList.add('posterDiv');
    const jingle = document.createElement('p');

    homeDiv.classList.add('home');

    const donutImg = new Image();
    donutImg.src = Donut;

    jingle.textContent = "All donuts approved by Donk-E himself! Grab one Today!";

    poster.appendChild(jingle);
    poster.appendChild(donutImg);

    homeDiv.appendChild(navfun());
    homeDiv.appendChild(poster);

    return homeDiv;
}

export {home,navfun};
