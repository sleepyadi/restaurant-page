import { LayoutCreator, CardCreator } from "./utils";


function createAboutCard() {
    // title + info
    const aboutUs = new CardCreator('about__about');

    const aboutTitle = document.createElement('h2');
    aboutTitle.classList.add('about__about-title');
    aboutTitle.textContent = 'About Us';

    const aboutInfo = document.createElement('p');
    aboutInfo.classList.add('about__about-para');
    aboutInfo.textContent = '';

    aboutUs.addElement([aboutTitle, aboutInfo]);

    return aboutUs.element;
}

function createContactCard() {
    // title + info
    const contact = new CardCreator('about__contact');

    const contactTitle = document.createElement('h2');
    contactTitle.classList.add('about__contact-title');
    contactTitle.textContent = 'Contact Us';

    const contactInfo = document.createElement('p');
    contactInfo.classList.add('about__contact-para');
    contactInfo.textContent = '';

    contact.addElement([contactTitle, contactInfo]);

    return contact.element;
}


function generateAbout() {
    // about-us-title info contact-us-title info
    const about = new LayoutCreator({type: 'div', tagType: 'class', tag: 'about'});

    const aboutUs = createAboutCard();
    const contact = createContactCard();

    about.addElement([aboutUs, contact]);

    return about.element;
}

export { generateAbout };