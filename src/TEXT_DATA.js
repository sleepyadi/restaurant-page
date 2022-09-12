import Pizza from './assets/pizza.jpg';
import Pasta from './assets/pasta.jpg';

const MENU = [
    {
        name: 'Pizza',
        price: '$15',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        img: Pizza,
    },
    {
        name: 'Pasta',
        price: '$10',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        img: Pasta,
    },

]

const ABOUT = {
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." ,

    contact: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

}

const HOME = {
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

    openTime: ["Sunday: 9am - 9pm","Monday: 10am - 8pm","Tuesday: 10am - 8pm","Wednesday: 10am - 8pm", "Thursday: 10am - 8pm","Friday: 9am - 9pm", "Satuarday: Closed"],

    location: "393 Beaver's Dam, Narnia, Fantasy Land"
}


export {MENU, ABOUT, HOME }