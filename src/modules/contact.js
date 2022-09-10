
export default function contact(){

    const contactDiv = document.createElement('div');
    const infoBox = document.createElement('div');
    const address = document.createElement('p');
    const phone = document.createElement('p');
    const timings = document.createElement('p');
    const email = document.createElement('p');

    contactDiv.classList.add('contact');
    infoBox.classList.add('infoBox');

    address.textContent = "Address: Ground Floor, New Shop No. GF 19 & 20,Old Shop No. GF 25, 26 & 27,ROF Portico, Sector-43, Sushant Lok-1 Gurugram Haryana - 122003"
    timings.textContent = "Timings: 11:00AM - 12:00AM";
    phone.textContent = "Phone: 0755-4584-3432";
    email.textContent = "Email: customerdonke@donkfood.com";

    infoBox.appendChild(address);
    infoBox.appendChild(timings);
    infoBox.appendChild(phone);
    infoBox.appendChild(email);


    contactDiv.appendChild(infoBox);

    return contactDiv;
}