import './../styles/style.css';
import {navfun} from './home.js';
import bostonDon from './../images/donutImgs/bostonDon.jpg';
import cakeDon from './../images/donutImgs/cakeDon.jpg';
import crullerDon from './../images/donutImgs/crullerDon.jpg';
import donutHoles from './../images/donutImgs/donutHoles.jpg';
import longJohnDon from './../images/donutImgs/longJohnDon.jpg';
import yeastDon from './../images/donutImgs/yeastDon.jpg';

export default function menu(){
    const menuDiv = document.createElement('div');

    const menuHeader = document.createElement('div');
    const menuLogo = document.createElement('p');
    const donutDiv = document.createElement('div');
    
    const bostonDonDiv = document.createElement('div');
    const cakeDonDiv = document.createElement('div');
    const crullerDonDiv = document.createElement('div');
    const donutHolesDiv = document.createElement('div');
    const longJohnDonDiv = document.createElement('div');
    const yeastDonDiv = document.createElement('div');

    const bostonImg = new Image();
    bostonImg.src = bostonDon;
    const cakeImg = new Image();
    cakeImg.src = cakeDon;
    const crullerImg = new Image();
    crullerImg.src = crullerDon;
    const donutholeImg = new Image();
    donutholeImg.src = donutHoles;
    const longJohnImg = new Image();
    longJohnImg.src = longJohnDon;
    const yeastImg = new Image();
    yeastImg.src = yeastDon;

    const bostonName = document.createElement('p');
    const cakeName = document.createElement('p');
    const crullerName = document.createElement('p');
    const donutholeName = document.createElement('p');
    const longJohnName = document.createElement('p');
    const yeastName = document.createElement('p');

    bostonName.textContent = "Boston Cream Doughnut";
    cakeName.textContent = "Cake Doughnuts";
    crullerName.textContent = "Cruller";
    donutholeName.textContent = "Doughnut Holes";
    longJohnName.textContent = "Long John";
    yeastName.textContent = "Yeast Doughnuts";

    bostonDonDiv.appendChild(bostonImg);
    bostonDonDiv.appendChild(bostonName);
    cakeDonDiv.appendChild(cakeImg);
    cakeDonDiv.appendChild(cakeName);
    crullerDonDiv.appendChild(crullerImg);
    crullerDonDiv.appendChild(crullerName);
    donutHolesDiv.appendChild(donutholeImg);
    donutHolesDiv.appendChild(donutholeName);
    longJohnDonDiv.appendChild(longJohnImg);
    longJohnDonDiv.appendChild(longJohnName);
    yeastDonDiv.appendChild(yeastImg);
    yeastDonDiv.appendChild(yeastName);

    donutDiv.appendChild(bostonDonDiv);
    donutDiv.appendChild(cakeDonDiv);
    donutDiv.appendChild(crullerDonDiv);
    donutDiv.appendChild(donutHolesDiv);
    donutDiv.appendChild(longJohnDonDiv);
    donutDiv.appendChild(yeastDonDiv);

    menuDiv.classList.add('menu');
    menuHeader.classList.add('menuHeader');
    donutDiv.classList.add('allDonuts');

    menuLogo.textContent = "|| Menu ||";
    menuHeader.appendChild(menuLogo);

    
    menuDiv.appendChild(navfun());
    menuDiv.appendChild(menuHeader);
    menuDiv.appendChild(donutDiv);

    return menuDiv;
}