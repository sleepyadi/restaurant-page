import { LayoutCreator, CardCreator } from "./utils";
import { ABOUT } from "./TEXT_DATA";


function createAboutCard() {
    // title + info
    const aboutUs = new CardCreator('about__about');

    const aboutTitle = document.createElement('h2');
    aboutTitle.classList.add('about__title');
    aboutTitle.textContent = 'About Us';

    const aboutInfo = document.createElement('p');
    aboutInfo.classList.add('about__about-para');
    aboutInfo.textContent = ABOUT.about;

    aboutUs.addElement([aboutTitle, aboutInfo]);

    return aboutUs.element;
}

function createContactCard() {
    // title + info
    const contact = new CardCreator('about__contact');

    const contactTitle = document.createElement('h2');
    contactTitle.classList.add('about__title');
    contactTitle.textContent = 'Contact Us';

    const contactInfo = document.createElement('p');
    contactInfo.classList.add('about__contact-para');
    contactInfo.textContent = ABOUT.contact;

    contact.addElement([contactTitle, contactInfo]);

    return contact.element;
}


function generateAbout() {
    // about-us-title info contact-us-title info
    const about = new LayoutCreator({type: 'main', tagType: 'class', tag: 'about'});

    const aboutTitle = document.createElement('h1');
    aboutTitle.classList.add('about__title-main');
    aboutTitle.textContent = 'About';

    const aboutUs = createAboutCard();
    const contact = createContactCard();

    about.addElement([aboutTitle, aboutUs, contact]);

    return about.element;
}

export { generateAbout };