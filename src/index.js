// const headerDiv = document.createElement('.header-div');
// const containerDiv = document.createElement('container');
import "./styles.css";
import { loadContent as home } from "./page.js";
import { makeMenu as menu } from "./menu.js";
import { createContact as contact } from "./contact.js";


const tabButtons = document.querySelectorAll('.tab-button');
const contentDiv = document.querySelector('.content-container');


function switchTab(page){

    while(contentDiv.lastChild){
        contentDiv.removeChild(contentDiv.lastChild);
    }

    if(page === "home"){
        home();
    }
    else if(page === "menu"){
        menu();
    }
    else if(page === "contact"){
        contact();
    }
}

home();

tabButtons.forEach( (button) => {
    button.addEventListener('click', () => {
        switchTab(button.getAttribute('data-tab') );
    });
});
