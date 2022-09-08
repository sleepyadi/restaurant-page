import { LayoutCreator } from "./utils";

function generateHeader() {
    const header = new LayoutCreator({type: 'header', tagType: 'class', tag: 'header'});
    const homeTab = new LayoutCreator({type: 'div', tagType: 'class', tag: 'header__tab home-tab'});
    const menuTab = new LayoutCreator({type: 'div', tagType: 'class', tag: 'header__tab menu-tab'});
    const aboutTab = new LayoutCreator({type: 'div', tagType: 'class', tag: 'header__tab about-tab'});
    
    homeTab.element.textContent = 'Home';
    homeTab.element.setAttribute('data-target-tab', 'home');
    
    menuTab.element.textContent = 'Menu';
    menuTab.element.setAttribute('data-target-tab', 'menu');
    
    aboutTab.element.textContent = 'About Us';
    aboutTab.element.setAttribute('data-target-tab', 'about');
    
    header.addElement([homeTab.element, menuTab.element, aboutTab.element]);
    
    return header.element;
}

export { generateHeader };