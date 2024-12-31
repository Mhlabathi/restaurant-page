import beef from "./images/beef.jpg";
import lasagna from "./images/lasagna.jpg";
import usu from "./images/usu.jpeg";
import fries from "./images/fries.jpg";
import samosa from "./images/samosa.jpg";
import salad from "./images/salad.jpg";
import cheese from "./images/cheese.jpg";
import mousse from "./images/mousse.jpg";
import brownie from "./images/brownie.jpg";

export const makeMenu = () => {
    const content = document.querySelector('.content-container');
    const menuContainer = document.createElement('div');
    menuContainer.className = 'menu-container';

    const mainMenu = document.createElement("div");
    const sideMenu = document.createElement("div");
    const dessertMenu = document.createElement("div");

    mainMenu.className = 'main-menu';
    sideMenu.className = 'side-menu';
    dessertMenu.className = 'dessert-menu';

    //Menu Headers
    const mainHeader = document.createElement('h2');
    const sideHeader = document.createElement('h2');
    const dessertHeader = document.createElement('h2');

    //mainMenu elements*****************************
    const mainOne = document.createElement('div');
    const mainTwo = document.createElement('div');
    const mainThree = document.createElement('div');

    mainOne.className = 'single-menu';
    mainTwo.className = 'single-menu';
    mainThree.className = 'single-menu';

    //Price Elements
    const price1 = document.createElement('h5');
    const price2 = document.createElement('h5');
    const price3 = document.createElement('h5');
    const price4 = document.createElement('h5');
    const price5 = document.createElement('h5');
    const price6 = document.createElement('h5');
    const price7 = document.createElement('h5');
    const price8 = document.createElement('h5');
    const price9 = document.createElement('h5');

    //mainOne elements
    const beefH = document.createElement('h4');
    const beefImg = document.createElement('img');
    const beefDes = document.createElement('p');

    //mainTwo elements
    const lasH = document.createElement('h4');
    const lasImg = document.createElement('img');
    const lasDes = document.createElement('p');

    //mainThree elements
    const usuH = document.createElement('h4');
    const usuImg = document.createElement('img');
    const usuDes = document.createElement('p');

    //SideMenu Elements****************************
    const sideOne = document.createElement('div');
    const sideTwo = document.createElement('div');
    const sideThree = document.createElement('div');

    sideOne.className = 'single-menu';
    sideTwo.className = 'single-menu';
    sideThree.className = 'single-menu';

    //sideOne elements
    const friesH = document.createElement('h4');
    const friesImg = document.createElement('img');
    const friesDes = document.createElement('p');

    //sideTwo elements
    const samH = document.createElement('h4');
    const samImg = document.createElement('img');
    const samDes = document.createElement('p');

    //sideThree elements
    const salH = document.createElement('h4');
    const salImg = document.createElement('img');
    const salDes = document.createElement('p');

    //desertMenu Elements**************************
    const dessertOne = document.createElement('div');
    const dessertTwo = document.createElement('div');
    const dessertThree = document.createElement('div');

    dessertOne.className = 'single-menu';
    dessertTwo.className = 'single-menu';
    dessertThree.className = 'single-menu';

    //dessertOne elements
    const cheeseH = document.createElement('h4');
    const cheeseImg = document.createElement('img');
    const cheeseDes = document.createElement('p');

    //dessertTwo elements
    const brownieH = document.createElement('h4');
    const brownieImg = document.createElement('img');
    const brownieDes = document.createElement('p');

    //dessertThree elements
    const mousseH = document.createElement('h4');
    const mousseImg = document.createElement('img');
    const mousseDes = document.createElement('p');

    const addToMenu = () => {

        //Menu Headers
        mainHeader.textContent = "Main Menu";
        sideHeader.textContent = "Side Menu";
        dessertHeader.textContent = "Dessert Menu";

        price1.textContent = "R100";
        price2.textContent = "R120";
        price3.textContent = "R80";
        price4.textContent = "R50";
        price5.textContent = "R30";
        price6.textContent = "R40";
        price7.textContent = "R60";
        price8.textContent = "R70";
        price9.textContent = "R90";

        //MainMenu Appending
        //beef
        beefImg.src = beef;
        beefH.textContent = "Beef Stew";
        beefDes.textContent = "Sliced beef stock, sliced carrots, onions, chopped greens slowly coocked to perfect tenderness";

        mainOne.appendChild(beefH);
        mainOne.appendChild(beefImg);
        mainOne.appendChild(beefDes);
        mainOne.appendChild(price1);
        mainMenu.appendChild(mainHeader);
        mainMenu.appendChild(mainOne);

        //lasagna
        lasImg.src = lasagna;
        lasH.textContent = "Lasagna";
        lasDes.textContent = "Quadriple layered taste of your choice. Choose from chicken, Beef or Bolognese flovour full of Mzansi's style and Durban curry spicing"

        mainTwo.appendChild(lasH);
        mainTwo.appendChild(lasImg);
        mainTwo.appendChild(lasDes);
        mainTwo.appendChild(price2);
        mainMenu.appendChild(mainTwo);

        //Mugodu
        usuImg.src = usu;
        usuH.textContent = "Usu";
        usuDes.textContent = "When we talk of a warm home coocked meal, nothing beats usu with a taste of african cuisin and a a touch of ugogo wasezilalini"

        mainThree.appendChild(usuH);
        mainThree.appendChild(usuImg);
        mainThree.appendChild(usuDes);
        mainThree.appendChild(price3);
        mainMenu.appendChild(mainThree);

        menuContainer.appendChild(mainMenu);

        //Side Menu Append
        //Fries
        friesImg.src = fries;
        friesH.textContent = "French Fries";
        friesDes.textContent = "Taste our carefully handcut fries which are slowly coocked to perfect crisp and taste with the source dip of your choice. Sweet potato fries available too"

        sideOne.appendChild(friesH);
        sideOne.appendChild(friesImg);
        sideOne.appendChild(friesDes);
        sideOne.appendChild(price4);
        sideMenu.appendChild(sideHeader);
        sideMenu.appendChild(sideOne);

        //Samosa
        samImg.src = samosa;
        samH.textContent = "Samosa";
        samDes.textContent = "Our carefully hand-picked ingredients and well made dough to bring you a flavourful taste. Beef, chicken or cheese";

        sideTwo.appendChild(samH);
        sideTwo.appendChild(samImg);
        sideTwo.appendChild(samDes);
        sideTwo.appendChild(price5);
        sideMenu.appendChild(sideTwo);

        //Salad
        salImg.src = salad;
        salH.textContent = "Greek Salad";
        salDes.textContent = "Fresh veggies locally produced to make a salad fresher and crispier than ever, topped with a range of optional olives, chives, avos and salad dressing";

        sideThree.appendChild(salH);
        sideThree.appendChild(salImg);
        sideThree.appendChild(salDes);
        sideThree.appendChild(price6);
        sideMenu.appendChild(sideThree);

        menuContainer.appendChild(sideMenu);

        //Dessert Append
        //cheeseCake
        cheeseImg.src = cheese;
        cheeseH.textContent = "Cheese Cake";
        cheeseDes.textContent = "Our cheese cake is rated among the best in town, topped with lemony flavour to tentilise your taste buds";

        dessertOne.appendChild(cheeseH);
        dessertOne.appendChild(cheeseImg);
        dessertOne.appendChild(cheeseDes);
        dessertOne.appendChild(price7);
        dessertMenu.appendChild(dessertHeader);
        dessertMenu.appendChild(dessertOne);

        //Chocolate Brownie
        brownieImg.src = brownie;
        brownieH.textContent = "Chocolate Brownie";
        brownieDes.textContent = "Sweet is where the heart is with our smooth and soft on the mouth and perfect to fill your sweet tooth";

        dessertTwo.appendChild(brownieH);
        dessertTwo.appendChild(brownieImg);
        dessertTwo.appendChild(brownieDes);
        dessertTwo.appendChild(price8);
        dessertMenu.appendChild(dessertTwo);

        //Chocolate Mousse
        mousseImg.src = mousse;
        mousseH.textContent = "Chocolate Mousse";
        mousseDes.textContent = "Wheather you like to dig or dive, our mousse will have on cloud nine, no we dont put the green tree, just pure minty flavour to capitalise your taste buds";

        dessertThree.appendChild(mousseH);
        dessertThree.appendChild(mousseImg);
        dessertThree.appendChild(mousseDes);
        dessertThree.appendChild(price9);
        dessertMenu.appendChild(dessertThree);

        menuContainer.appendChild(dessertMenu);
        content.appendChild(menuContainer);


    };
    addToMenu();

    return {
        addToMenu,
    };
};