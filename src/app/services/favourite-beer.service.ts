import { Injectable } from '@angular/core';
import { FAVOURITE_BEERS } from '../data/favourite_beers';
import { FavouriteBeer } from '../definitions';

@Injectable({
    providedIn: 'root'
})
export class FavouriteBeerService {

    constructor() { }

    getFavouriteBeers(): FavouriteBeer[] {
        return FAVOURITE_BEERS;
    }
}
