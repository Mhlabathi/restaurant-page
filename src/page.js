import diningImage from "./images/dining.jpg";

export const  loadContent = () => {
    const content = document.querySelector('.content-container');
    const homeHeader = document.createElement('div');
    const hours = document.createElement('p');
    const location = document.createElement('p');

    homeHeader.className = 'home-header';
    hours.className = 'hours';
    location.className = 'location';

    const header = document.createElement("h1");
    const image = document.createElement('img');
    const info = document.createElement('p');

    const stickContent = () => {
        header.textContent = "Mhlabathi's Dining Experience";
        homeHeader.appendChild(header);
        image.src = diningImage;
        homeHeader.appendChild(image);
        info.textContent = 'The best mugodu experience in town, come enjoy the good food with great people and great music. Our Dining experience has been said to be the best in the town for its unique easthetics and overall service of nothing but awesomeness and great taste.'
        homeHeader.appendChild(info);
        content.appendChild(homeHeader);
        hours.textContent = 'Hours of Operation:';
        hours.appendChild(document.createElement("br"));
        hours.appendChild(document.createTextNode("10am - 10pm: Monday - Friday"));
        hours.appendChild(document.createElement("br"));
        hours.appendChild(document.createTextNode("10am - 6pm: Saturday - Sunday"));
        hours.appendChild(document.createElement("br"));
        hours.appendChild(document.createTextNode("Closed on Public Holidays"));
        content.appendChild(hours);
        location.textContent = 'Location: 1234 Mhlabathi Street, Mhlabathi, Mhlabathiland';
        content.appendChild(location);
    };
    stickContent();

    return{
        stickContent,
    };
};