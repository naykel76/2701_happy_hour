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
    is_favourite?: boolean,
    // venues: {
    //     name: string
    //     price: number,
    //     } [];
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
    birthday: any;
    phone: any;
    avatar: string;
}
