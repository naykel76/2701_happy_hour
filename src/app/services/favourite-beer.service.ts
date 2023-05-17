import { Injectable } from '@angular/core';
import { FAVOURITE_BEERS } from '../../data/favourite_beers';
import { FavouriteBeer } from '../definitions';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class FavouriteBeerService {

    private favouriteBeers: FavouriteBeer[] = FAVOURITE_BEERS;
    private fbSubject = new BehaviorSubject<FavouriteBeer[]>(this.favouriteBeers);

    getFavouriteBeers(): Observable<FavouriteBeer[]> {
        return this.fbSubject.asObservable();
    }

    addFavouriteBeer(beer: FavouriteBeer): void {
        this.favouriteBeers.push(beer);
        this.fbSubject.next(this.favouriteBeers);
    }

    updateFavouriteBeer(updatedBeer: FavouriteBeer): void {
        const index = this.favouriteBeers.findIndex(beer => beer.id === updatedBeer.id);
        if (index !== -1) {
            this.favouriteBeers[index] = updatedBeer;
            this.fbSubject.next(this.favouriteBeers);
        }
    }

    /**
     * delete favourite beer by fbid
     */
    deleteFavouriteBeer(fbid: number): void {
        const index = this.favouriteBeers.findIndex(beer => beer.id === fbid);
        this.favouriteBeers.splice(index, 1);
        this.fbSubject.next(this.favouriteBeers);
    }
}


