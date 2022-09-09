import { LayoutCreator } from "./utils";

function generateFooter() {
    const footer = new LayoutCreator({type: 'footer', tagType: 'class', tag: 'footer'});
    
    const footerP = document.createElement('p');
    footerP.classList.add('footer__text');
    footerP.textContent = 'made by ';

    const footerLink = document.createElement('a');
    footerLink.classList.add('footer__link');
    footerLink.href = 'https://github.com/sleepyadi';
    footerLink.textContent = 'sleepyadi';
    footerP.appendChild(footerLink);

    footer.addElement(footerP)

    return footer.element;
}

export { generateFooter };