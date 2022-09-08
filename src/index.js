import { LayoutCreator } from "./utils";
import { generateHeader } from "./header";


function init() {
    const content = new LayoutCreator({type: 'div', tagType: 'id', tag: 'content'});
    const header = generateHeader();
    
    content.addElement(header)
}

init();