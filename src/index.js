import { LayoutCreator } from "./utils";
import { generateHeader } from "./header";
import { generateHome } from "./home";


const pages = {
    home: generateHome,
    menu: '',
    about: '',
}

function init() {
    
    const content = new LayoutCreator({type: 'div', tagType: 'id', tag: 'content'});
    const header = generateHeader();
    
    content.addElement([header, pages.home()]);
}

init();