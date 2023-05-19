// types definitions file

export interface Beer {
    id: number;
    name: string;
    image: string;
}

export interface Coordinates {
    lat: number;
    lng: number;
}

export interface FavouriteBeer {
    id: number;
    beer: Beer;
    venues?: {
        id: number;
        name: string
        price: number,
    }[];
}

export interface Venue {
    id: number;
    name: string;
    address: string;
    coordinates: Coordinates;
}

export interface User {
    name: string;
    email: string;
    password: string;
    birthday: any;
    phone: any;
    avatar: string;
}
