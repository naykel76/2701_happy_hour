import { Beer, FavouriteBeer, User, Venue } from "../app/definitions";

export const BEERS: Beer[] = [
    { id: 701, name: 'Carlton Dry', image: 'carlton-dry.jpg' },
    { id: 702, name: 'Coopers Dark', image: 'coopers-dark.jpg' },
    { id: 703, name: 'Great Northern', image: 'great-northern.jpg' },
    { id: 704, name: 'Hahn Premium Light', image: 'hahn-premium-light.jpg' },
    { id: 705, name: 'Hahn Super Dry', image: 'hahn-super-dry.jpg' },
    { id: 706, name: 'Heineken', image: 'heineken.jpg' },
    { id: 707, name: 'Stone and Wood', image: 'stone-and-wood.jpg' },
    { id: 708, name: 'Tooheys Extra Dry', image: 'tooheys-extra-dry.jpg' },
    { id: 709, name: 'Tooheys New', image: 'tooheys-new.jpg' },
    { id: 710, name: 'Victoria Bitter', image: 'victoria-bitter.jpg' },
    { id: 711, name: 'XXXX Bitter', image: 'xxxx-bitter.jpg' },
    { id: 712, name: 'XXXX Gold', image: 'xxxx-gold.jpg' }
];


export const VENUES: Venue[] = [
    {
        id: 301,
        name: 'Runcorn Tavern',
        address: '124 Gowan Rd, Sunnybank Hills QLD 4109',
        coordinates: { lat: -27.595725912524248, lng: 153.06536734191715 },
    },
    {
        id: 302,
        name: 'Souths Sports Club',
        address: '174 Mortimer Rd, Acacia Ridge QLD 4110',
        coordinates: { lat: -27.576548, lng: 153.0161967 }
    },
    {
        id: 303,
        name: 'Rocklea Hotel',
        address: '1337 Ipswich Rd, Rocklea QLD 4106',
        coordinates: { lat: -27.5431423, lng: 153.0107211 }
    },
    {
        id: 304,
        name: 'Greenbank RSL',
        address: '54 Anzac Ave, Hillcrest QLD 4118',
        coordinates: { lat: -27.668544, lng: 153.0320448 },
    },
    {
        id: 305,
        name: 'Calamvale Hotel',
        address: '678 Compton Rd, Calamvale QLD 4116',
        coordinates: { lat: -27.611939, lng: 153.0526492 }
    },
    {
        id: 306,
        name: 'Sunnybank Hotel',
        address: '275 McCullough St, Sunnybank QLD 4109',
        coordinates: { lat: -27.5699875, lng: 153.0530696 }
    },
    {
        id: 307,
        name: 'Lucky Star Tavern',
        address: '397 Hellawell Rd, Sunnybank Hills QLD 4109',
        coordinates: { lat: -27.570061, lng: 153.0531298 }
    },
    {
        id: 308,
        name: 'Acacia Ridge Hotel',
        address: '1386 Beaudesert Rd, Acacia Ridge QLD 4110',
        coordinates: { lat: -27.5866987, lng: 153.0278106 }
    }
];

export const USER: User = {
    name: 'Billy McDoogle',
    email: 'billy_mac@gmail.com',
    password: '12345',
    birthday: '23/09/1996',
    phone: '0404 0505 0909',
    avatar: 'avatar.png'
};

export const FAVOURITE_BEERS: FavouriteBeer[] = [
    {
        id: 10,
        beer: { id: 705, name: 'Hahn Super Dry', image: 'hahn-super-dry.jpg' },
        venues: [
            { id: 308, name: "Acacia Ridge Hotel", price: 10.38 },
            { id: 301, name: "Runcorn Tavern", price: 9.90 },
            { id: 306, name: "Sunnybank Hotel", price: 10.49 }
        ]
    },
    {
        id: 11,
        beer: { id: 712, name: 'XXXX Gold', image: 'xxxx-gold.jpg' },
        venues: [
            { id: 308, name: "Acacia Ridge Hotel", price: 9.38 },
            { id: 301, name: "Runcorn Tavern", price: 10.49 },
            { id: 306, name: "Sunnybank Hotel", price: 9.90 },
            { id: 303, name: "Rocklea Hotel", price: 9.43 },
            { id: 304, name: "Greenbank RSL", price: 7.95 }
        ]
    },
    {
        id: 12,
        beer: { id: 703, name: "Great Northern", image: "great-northern.jpg" },
        venues: [
            { id: 8, name: "Acacia Ridge Hotel", price: 10.38 },
            { id: 1, name: "Runcorn Tavern", price: 9.90 },
            { id: 6, name: "Sunnybank Hotel", price: 10.49 }
        ]
    },
    {
        id: 13,
        beer: { id: 708, name: "Tooheys Extra Dry", image: "tooheys-extra-dry.jpg" },
        venues: [
            { id: 8, name: "Acacia Ridge Hotel", price: 9.38 },
            { id: 1, name: "Runcorn Tavern", price: 10.49 },
            { id: 6, name: "Sunnybank Hotel", price: 9.90 },
            { id: 3, name: "Rocklea Hotel", price: 9.43 },
            { id: 4, name: "Greenbank RSL", price: 7.95 }
        ]
    },
    {
        id: 14,
        beer: { id: 711, name: "XXXX Bitter", image: "xxxx-bitter.jpg" },
        venues: [
            { id: 5, name: "Calamvale Hotel", price: 7.37 },
            { id: 7, name: "Lucky Star Tavern", price: 9.75 }
        ]
    }
]

export const CHECK_IN_LOG = [
    { date: "22-05-04", venue_id: 306 },
    { date: "22-05-06", venue_id: 305 },
    { date: "22-05-08", venue_id: 306 },
    { date: "22-05-08", venue_id: 304 },
    { date: "22-05-16", venue_id: 302 },
    { date: "22-05-26", venue_id: 307 },
    { date: "22-06-05", venue_id: 306 },
    { date: "22-06-13", venue_id: 305 },
    { date: "22-06-17", venue_id: 307 },
    { date: "22-06-19", venue_id: 302 },
    { date: "22-06-26", venue_id: 304 },
    { date: "22-07-04", venue_id: 301 },
    { date: "22-07-16", venue_id: 306 },
    { date: "22-07-17", venue_id: 308 },
    { date: "22-07-18", venue_id: 305 },
    { date: "22-07-21", venue_id: 304 },
    { date: "22-07-21", venue_id: 306 },
    { date: "22-07-22", venue_id: 308 },
    { date: "22-07-22", venue_id: 301 },
    { date: "22-07-22", venue_id: 303 },
    { date: "22-07-27", venue_id: 306 },
    { date: "22-08-07", venue_id: 307 },
    { date: "22-08-13", venue_id: 302 },
    { date: "22-08-17", venue_id: 301 },
    { date: "22-08-21", venue_id: 302 },
    { date: "22-08-23", venue_id: 307 },
    { date: "22-08-31", venue_id: 301 },
    { date: "22-09-10", venue_id: 301 },
    { date: "22-09-10", venue_id: 304 },
    { date: "22-09-13", venue_id: 304 },
    { date: "22-09-14", venue_id: 305 },
    { date: "22-09-15", venue_id: 303 },
    { date: "22-09-16", venue_id: 307 },
    { date: "22-09-18", venue_id: 305 },
    { date: "22-09-20", venue_id: 304 },
    { date: "22-09-21", venue_id: 304 },
    { date: "22-09-21", venue_id: 306 },
    { date: "22-09-22", venue_id: 303 },
    { date: "22-09-25", venue_id: 306 },
    { date: "22-09-27", venue_id: 301 },
    { date: "22-09-28", venue_id: 301 },
    { date: "22-10-01", venue_id: 308 },
    { date: "22-10-04", venue_id: 307 },
    { date: "22-10-05", venue_id: 302 },
    { date: "22-10-14", venue_id: 307 },
    { date: "22-10-14", venue_id: 307 },
    { date: "22-10-17", venue_id: 301 },
    { date: "22-10-25", venue_id: 302 },
    { date: "22-10-27", venue_id: 306 },
    { date: "22-10-28", venue_id: 308 },
    { date: "22-11-08", venue_id: 301 },
    { date: "22-11-08", venue_id: 302 },
    { date: "22-11-22", venue_id: 301 },
    { date: "22-11-25", venue_id: 305 },
    { date: "22-12-03", venue_id: 305 },
    { date: "22-12-03", venue_id: 304 },
    { date: "22-12-03", venue_id: 305 },
    { date: "22-12-10", venue_id: 304 },
    { date: "22-12-16", venue_id: 305 },
    { date: "22-12-19", venue_id: 307 },
    { date: "22-12-19", venue_id: 306 },
    { date: "22-12-23", venue_id: 308 },
    { date: "22-12-28", venue_id: 308 },
    { date: "22-12-29", venue_id: 307 },
    { date: "22-12-31", venue_id: 301 },
    { date: "23-01-07", venue_id: 301 },
    { date: "23-01-11", venue_id: 304 },
    { date: "23-01-11", venue_id: 303 },
    { date: "23-01-14", venue_id: 305 },
    { date: "23-01-15", venue_id: 306 },
    { date: "23-01-17", venue_id: 308 },
    { date: "23-01-28", venue_id: 301 },
    { date: "23-01-30", venue_id: 306 },
    { date: "23-02-06", venue_id: 305 },
    { date: "23-02-07", venue_id: 301 },
    { date: "23-02-14", venue_id: 304 },
    { date: "23-02-14", venue_id: 304 },
    { date: "23-02-16", venue_id: 304 },
    { date: "23-02-17", venue_id: 307 },
    { date: "23-02-26", venue_id: 302 },
    { date: "23-03-02", venue_id: 306 },
    { date: "23-03-02", venue_id: 304 },
    { date: "23-03-05", venue_id: 304 },
    { date: "23-03-20", venue_id: 308 },
    { date: "23-03-27", venue_id: 307 },
    { date: "23-03-30", venue_id: 306 },
    { date: "23-03-30", venue_id: 305 },
    { date: "23-04-01", venue_id: 308 },
    { date: "23-04-03", venue_id: 308 },
    { date: "23-04-03", venue_id: 304 },
    { date: "23-04-06", venue_id: 307 },
    { date: "23-04-10", venue_id: 308 },
    { date: "23-04-13", venue_id: 301 },
    { date: "23-04-14", venue_id: 302 },
    { date: "23-04-21", venue_id: 308 },
    { date: "23-04-23", venue_id: 305 },
    { date: "23-04-24", venue_id: 308 },
    { date: "23-04-27", venue_id: 308 },
    { date: "23-04-28", venue_id: 306 },
    { date: "23-04-29", venue_id: 307 }
]
