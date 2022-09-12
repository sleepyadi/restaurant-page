import { LayoutCreator, CardCreator } from "./utils"
import { MENU } from "./TEXT_DATA";

function createMenuItem({name, price, desc, img}) {
    // temporarily no img support will fix later
    const menuItem = new CardCreator('menu__item');

    const itemImg = document.createElement('img');
    itemImg.classList.add('menu__item-img');
    itemImg.src = img;
    
    const itemName = document.createElement('h4');
    itemName.classList.add('menu__item-name');
    itemName.textContent = name;

    const itemPrice = document.createElement('p');
    itemPrice.classList.add('menu__item-price');
    itemPrice.textContent = price;

    const itemDesc = document.createElement('p');
    itemDesc.classList.add('menu__item-desc');
    itemDesc.textContent = desc;
    
    menuItem.addElement([itemImg, itemName, itemPrice, itemDesc]);
    
    return menuItem.element;
}


function createMenuCard() {
    const menuItems = new CardCreator('menu__items');

    for (let item of MENU) {
        menuItems.addElement(createMenuItem(item));
    }

    return menuItems.element;
}


function generateMenu() {
    // grid menu items
    const menu = new LayoutCreator({type: 'main', tagType: 'class', tag: 'menu'});
    const menuTitle = document.createElement('h1');
    menuTitle.classList.add('menu__title');
    menuTitle.textContent = 'Menu';

    const menuItems = createMenuCard();
    
    menu.addElement([menuTitle, menuItems]);

    return menu.element;
}

export { generateMenu };