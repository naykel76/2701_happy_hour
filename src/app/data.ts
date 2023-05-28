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
        checked_in: 3,
        address: '124 Gowan Rd, Sunnybank Hills QLD 4109',
        coordinates: { lat: -27.595725912524248, lng: 153.06536734191715 },
    },
    {
        id: 302,
        name: 'Souths Sports Club',
        checked_in: 4,
        address: '174 Mortimer Rd, Acacia Ridge QLD 4110',
        coordinates: { lat: -27.576548, lng: 153.0161967 }
    },
    {
        id: 303,
        name: 'Rocklea Hotel',
        checked_in: 14,
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

// export const CHECK_IN_LOG = [{ "date": "15/11/2022", "venue_id": 307 }, { "date": "11/11/2022", "venue_id": 308 }]
export const CHECK_IN_LOG = [{ "date": "2023-05-25", "venue_id": 307 }, { "date": "2023-05-01", "venue_id": 308 }, { "date": "2022-12-30", "venue_id": 308 }];

export const CHECK_IN_LOG_ = [{ "date": "11/11/2022", "venue_id": 307 }, { "date": "11/11/2022", "venue_id": 307 }, { "date": "11/11/2022", "venue_id": 307 }, { "date": "11/11/2022", "venue_id": 307 }, { "date": "11/11/2022", "venue_id": 307 }, { "date": "12/26/2022", "venue_id": 307 }, { "date": "12/26/2022", "venue_id": 307 }, { "date": "12/26/2022", "venue_id": 307 }, { "date": "12/26/2022", "venue_id": 307 }, { "date": "12/26/2022", "venue_id": 307 }, { "date": "12/26/2022", "venue_id": 307 }, { "date": "12/26/2022", "venue_id": 307 }, { "date": "12/26/2022", "venue_id": 307 }, { "date": "12/26/2022", "venue_id": 307 }, { "date": "12/26/2022", "venue_id": 307 }, { "date": "12/26/2022", "venue_id": 307 }, { "date": "12/26/2022", "venue_id": 307 }, { "date": "12/26/2022", "venue_id": 307 }, { "date": "12/26/2022", "venue_id": 307 }, { "date": "12/26/2022", "venue_id": 307 }, { "date": "12/26/2022", "venue_id": 307 }, { "date": "12/26/2022", "venue_id": 307 }, { "date": "11/30/2022", "venue_id": 304 }, { "date": "11/30/2022", "venue_id": 304 }, { "date": "11/30/2022", "venue_id": 304 }, { "date": "08/14/2022", "venue_id": 303 }, { "date": "08/14/2022", "venue_id": 303 }, { "date": "08/14/2022", "venue_id": 303 }, { "date": "08/14/2022", "venue_id": 303 }, { "date": "08/14/2022", "venue_id": 303 }, { "date": "08/14/2022", "venue_id": 303 }, { "date": "08/14/2022", "venue_id": 303 }, { "date": "08/14/2022", "venue_id": 303 }, { "date": "08/14/2022", "venue_id": 303 }, { "date": "08/14/2022", "venue_id": 303 }, { "date": "08/14/2022", "venue_id": 303 }, { "date": "08/14/2022", "venue_id": 303 }, { "date": "08/14/2022", "venue_id": 303 }, { "date": "08/14/2022", "venue_id": 303 }, { "date": "08/14/2022", "venue_id": 303 }, { "date": "08/14/2022", "venue_id": 303 }, { "date": "08/14/2022", "venue_id": 303 }, { "date": "08/14/2022", "venue_id": 303 }, { "date": "08/14/2022", "venue_id": 303 }, { "date": "08/14/2022", "venue_id": 303 }, { "date": "08/14/2022", "venue_id": 303 }, { "date": "08/14/2022", "venue_id": 303 }, { "date": "08/14/2022", "venue_id": 303 }, { "date": "08/14/2022", "venue_id": 303 }, { "date": "08/14/2022", "venue_id": 303 }, { "date": "12/07/2022", "venue_id": 306 }, { "date": "12/07/2022", "venue_id": 306 }, { "date": "06/14/2022", "venue_id": 303 }, { "date": "06/14/2022", "venue_id": 303 }, { "date": "06/14/2022", "venue_id": 303 }, { "date": "06/14/2022", "venue_id": 303 }, { "date": "06/14/2022", "venue_id": 303 }, { "date": "06/14/2022", "venue_id": 303 }, { "date": "06/14/2022", "venue_id": 303 }, { "date": "06/14/2022", "venue_id": 303 }, { "date": "06/14/2022", "venue_id": 303 }, { "date": "06/14/2022", "venue_id": 303 }, { "date": "06/14/2022", "venue_id": 303 }, { "date": "06/14/2022", "venue_id": 303 }, { "date": "06/14/2022", "venue_id": 303 }, { "date": "05/29/2022", "venue_id": 302 }, { "date": "05/29/2022", "venue_id": 302 }, { "date": "05/29/2022", "venue_id": 302 }, { "date": "05/29/2022", "venue_id": 302 }, { "date": "05/29/2022", "venue_id": 302 }, { "date": "05/29/2022", "venue_id": 302 }, { "date": "05/29/2022", "venue_id": 302 }, { "date": "05/29/2022", "venue_id": 302 }, { "date": "05/29/2022", "venue_id": 302 }, { "date": "05/29/2022", "venue_id": 302 }, { "date": "10/30/2022", "venue_id": 301 }, { "date": "10/30/2022", "venue_id": 301 }, { "date": "10/30/2022", "venue_id": 301 }, { "date": "10/30/2022", "venue_id": 301 }, { "date": "10/30/2022", "venue_id": 301 }, { "date": "10/30/2022", "venue_id": 301 }, { "date": "10/30/2022", "venue_id": 301 }, { "date": "10/30/2022", "venue_id": 301 }, { "date": "10/30/2022", "venue_id": 301 }, { "date": "10/30/2022", "venue_id": 301 }, { "date": "10/30/2022", "venue_id": 301 }, { "date": "10/30/2022", "venue_id": 301 }, { "date": "10/30/2022", "venue_id": 301 }, { "date": "10/30/2022", "venue_id": 301 }, { "date": "10/30/2022", "venue_id": 301 }, { "date": "10/30/2022", "venue_id": 301 }, { "date": "10/30/2022", "venue_id": 301 }, { "date": "10/30/2022", "venue_id": 301 }, { "date": "10/30/2022", "venue_id": 301 }, { "date": "10/30/2022", "venue_id": 301 }, { "date": "10/30/2022", "venue_id": 301 }, { "date": "10/30/2022", "venue_id": 301 }, { "date": "10/30/2022", "venue_id": 301 }, { "date": "10/30/2022", "venue_id": 301 }, { "date": "10/30/2022", "venue_id": 301 }, { "date": "05/23/2023", "venue_id": 303 }, { "date": "05/24/2023", "venue_id": 303 }, { "date": "05/25/2023", "venue_id": 303 }, { "date": "05/26/2023", "venue_id": 306 }, { "date": "05/27/2023", "venue_id": 307 }, { "date": "05/01/2023", "venue_id": 301 }, { "date": "05/02/2023", "venue_id": 302 }, { "date": "05/03/2023", "venue_id": 303 }, { "date": "05/04/2023", "venue_id": 304 }, { "date": "05/05/2023", "venue_id": 305 }, { "date": "05/06/2023", "venue_id": 306 }, { "date": "05/07/2023", "venue_id": 307 }, { "date": "05/08/2023", "venue_id": 308 }, { "date": "05/09/2023", "venue_id": 301 }, { "date": "05/10/2023", "venue_id": 302 }, { "date": "05/11/2023", "venue_id": 303 }, { "date": "05/12/2023", "venue_id": 304 }, { "date": "05/13/2023", "venue_id": 305 }, { "date": "05/14/2023", "venue_id": 306 }, { "date": "05/15/2023", "venue_id": 307 }, { "date": "05/16/2023", "venue_id": 308 }, { "date": "05/17/2023", "venue_id": 301 }, { "date": "05/18/2023", "venue_id": 302 }, { "date": "05/19/2023", "venue_id": 303 }, { "date": "05/20/2023", "venue_id": 304 }]


