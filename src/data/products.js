import moment from 'moment';

const PRODUCTS = [
    {
        id: 1,
        name: "USB Driver",
        price: "30",
        description: "We're specialists in USB flash drives for orders from 25 to 1 million! Whether you are looking to preload customized content on a highly reliable drive or to custom print a logo on a promotional flash drive, we have the right solution for you with the industry's best service and at the right price! Choose from a selection of our popular or unique models to customize with your company logo and colors. If you want to create your own drive, just contact one of our sales representatives.",
        creation_date: moment('2018/05/16', 'YYYY/MM/DD'),
    },
    {
        id: 2,
        name: "ASUS Laptop",
        price: "1200",
        description: "ROG Strix SCAR Edition is built exclusively for the sharpest shooters in the meanest gunfights. This gaming laptop is designed to give you a competitive edge in FPS esports titles like Counter-Strike®, Overwatch®, and Team Fortress®",
        creation_date: moment('2018/05/17', 'YYYY/MM/DD'),
    },
    {
        id: 3,
        name: "Laptop Bag",
        price: "120",
        description: "When business calls, make sure you're ready with this Kensington 62340 Contour Pro black nylon laptop carrying case! This laptop case is designed with all the amenities you need to take your office on the road. A laptop compartment ensures safe transport of your 17\" laptop, giving you peace of mind when you're on the go. At the same time, the exterior front pockets allow for superior organization. Durable zip closures keep contents contained so there's no threat of unfortunate spills on the way to your destination.",
        creation_date: moment('2018/05/18', 'YYYY/MM/DD'),
    },
    {
        id: 4,
        name: "Galaxy S8 Plus 64GB",
        price: "1000",
        description: "A screen without limits. The Galaxy S8+ has the world's first Infinity Screen. The expansive display stretches from edge to edge, giving you the most amount of screen in the least amount of space. And the Galaxy S8+ is even more massive — our biggest screen yet. Our best camera, now even smarter.",
        creation_date: moment('2018/05/19', 'YYYY/MM/DD'),
    },
    {
        id: 5,
        name: "Apple iPhone X Leather Case",
        price: "35",
        description: "7.28 inches (L) x 3.66 inches (W) x 1.0 centimeter thick",
        creation_date: moment('2018/05/21', 'YYYY/MM/DD'),
    }
];

export default PRODUCTS;
