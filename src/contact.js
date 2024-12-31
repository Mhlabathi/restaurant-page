export function createContact() {
    const contactDiv = document.createElement('div');
    contactDiv.classList.add('contact');

    const phone = document.createElement('p');
    phone.textContent = 'Phone: (123) 456-7890';
    contactDiv.appendChild(phone);

    const email = document.createElement('p');
    email.textContent = 'Email: contact@restaurant.com';
    contactDiv.appendChild(email);

    const address = document.createElement('p');
    address.textContent = 'Address: 123 Food Street, Flavor Town, RSA';
    contactDiv.appendChild(address);

    const contentContainer = document.querySelector('.content-container');
    contentContainer.appendChild(contactDiv);
}