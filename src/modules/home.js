import Donut from './../images/donut.jpg';
import './../styles/style.css';

function home(){
    const homeDiv = document.createElement('div');
    const nav = document.createElement('nav');
    const poster = document.createElement('div');
    poster.classList.add('posterDiv');
    const jingle = document.createElement('p');
    const navLinks = document.createElement('div');
    const logoDiv = document.createElement('div');
    const logo = document.createElement('p');
    const navHome = document.createElement('p');
    const navMenu = document.createElement('p');
    const navContact = document.createElement('p');

    const donutImg = new Image();
    donutImg.src = Donut;

    navLinks.classList.add("navLinks");
    homeDiv.classList.add('home');
    logoDiv.classList.add('logo');

    logoDiv.textContent = "Donk-E-Donuts";
    navHome.textContent = "Home";
    navMenu.textContent = "Menu";
    navContact.textContent = "Contact";
    jingle.textContent = "All donuts approved by Donk-E himself! Grab one Today!";

    logoDiv.appendChild(logo);
    navLinks.appendChild(navHome);
    navLinks.appendChild(navMenu);
    navLinks.appendChild(navContact);
    poster.appendChild(jingle);
    poster.appendChild(donutImg);

    
    nav.appendChild(logoDiv);
    nav.appendChild(navLinks);

    homeDiv.appendChild(nav);
    homeDiv.appendChild(poster);

    return homeDiv;
}

export default home;
