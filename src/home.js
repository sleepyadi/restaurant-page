import { LayoutCreator, CardCreator } from "./utils";
import { HOME } from "./TEXT_DATA";


function createDescriptionCard() {
    const desc = new CardCreator('home__desc');
    
    const descP = document.createElement('p');
    descP.classList.add('home__desc-para')
    descP.textContent = HOME.desc;
    desc.addElement(descP);

    return desc.element;
}

function createTimeCard() {
    const openTime = new CardCreator('home__time');

    const timeTitle = document.createElement('h2');
    timeTitle.classList.add('home__time-title')
    timeTitle.textContent = 'Open Hours';

    openTime.addElement(timeTitle);

    for (let text of HOME.openTime) {
        const timeP = document.createElement('p');
        timeP.classList.add('home__time-para')
        timeP.textContent = text;
        openTime.addElement(timeP)
    }

    
    return openTime.element;

}

function createLocationCard() {
    const location = new CardCreator('home__location');

    const locationTitle = document.createElement('h2');
    locationTitle.classList.add('home__location-title')
    locationTitle.textContent = 'Location';

    const locationP = document.createElement('p');
    locationP.classList.add('home__location-para')
    locationP.textContent = HOME.location;

    location.addElement([locationTitle, locationP]);

    return location.element;
}

function generateHome() {
    // desc open-time location
    const home = new LayoutCreator({type: 'main', tagType: 'class', tag: 'home'});
    const title = document.createElement('h1');
    title.classList.add('home__title');
    title.textContent = "The X Restaurant!";

    const description = createDescriptionCard();
    const openTime = createTimeCard();
    const location = createLocationCard();

    home.addElement([title, description, openTime, location]);

    return home.element;
}

export { generateHome };