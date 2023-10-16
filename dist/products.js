import { v4 as uuidv4 } from 'uuid';
let products;
let SlapYaMama, ColonCleaner, RRF, Generals, SatansRage, CrazyBastard;
// Initialize the goodies
products = [
    {
        id: uuidv4(),
        shortName: SlapYaMama,
        quantity: 50,
        name: 'Slap Ya Mama Hot Sauce',
        price: 9.99,
        img: './images/slap-ya-mama.jpg',
        description: 'Experience the sensation of explosive Cajun heat and flavor with Slap Ya Mama\'s Hot Sauce.'
    },
    {
        id: uuidv4(),
        shortName: ColonCleaner,
        quantity: 50,
        name: 'Colon Cleaner Hot Sauce',
        price: 12.99,
        img: './images/colon-cleaner.jpg',
        description: 'Professor Phardtpounders colon cleaner hot sauce - elixir of capsaicin extremus'
    },
    {
        id: uuidv4(),
        shortName: RRF,
        quantity: 50,
        name: 'Rectal Rocket Fuel Hot Sauce',
        price: 10.99,
        img: './images/rectal-rocket-fuel.jpg',
        description: 'Rectal rocket fuel island jerk hot sauce-The name says it all. This jerk sauce will knock you for a loop'
    },
    {
        id: uuidv4(),
        shortName: Generals,
        quantity: 50,
        name: "General's Hot Sauce",
        price: 14.95,
        img: './images/generals-hot-sauce.jpg',
        description: 'American-Grown Cayenne Peppers, Distilled White Vinegar, Salt, Garlic.'
    },
    {
        id: uuidv4(),
        shortName: SatansRage,
        quantity: 50,
        name: "Satan's Rage Ghost Pepper Hot Sauce",
        price: 12.99,
        img: './images/satans-rage.jpg',
        description: 'Satan\'s Rage Pepper Sauce: When you indulge in this sauce you will surely encounter the wrath of Satan\'s Rage. Moments after you taste this sinfully delicious sauce you will pay the price. '
    },
    {
        id: uuidv4(),
        shortName: CrazyBastard,
        quantity: 50,
        name: 'Crazy Bastard Sauce',
        price: 9.99,
        img: './images/crazy-bastard.jpg',
        description: 'Crazy Bastard Sauce - Award Winning Hot Sauce. Hand-Made in Berlin. Fruity and exotic with warming notes of cumin. Well balanced flavour.'
    }
];
export default products;
