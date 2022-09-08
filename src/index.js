import { LayoutCreator } from "./utils";
import { generateHeader } from "./header";
import { generateHome } from "./home";
import { generateAbout } from "./about";


const pages = {
    home: generateHome,
    menu: '',
    about: generateAbout,
}

function handleTabs(event) {
    const tabName = event.target.getAttribute('data-target-tab');
    const content = document.querySelector('#content');
    const newNode = pages[tabName];
    content.replaceChild(newNode(), content.children[1]);
}

function init() {
    
    const content = new LayoutCreator({type: 'div', tagType: 'id', tag: 'content'});
    const header = generateHeader();

    if (header) {
        const tabs = header.querySelectorAll('.header__tab');
        tabs.forEach((tab) => {
            tab.addEventListener('click', handleTabs);
        });
    }
    
    content.addElement([header, pages.home()]);
}

init();