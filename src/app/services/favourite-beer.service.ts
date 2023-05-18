import { Injectable } from '@angular/core';
import { FAVOURITE_BEERS } from '../../data/favourite_beers';
import { FavouriteBeer } from '../definitions';
import { Observable, BehaviorSubject } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({
    providedIn: 'root'
})
export class FavouriteBeerService {

    private favouriteBeers: FavouriteBeer[] = FAVOURITE_BEERS;
    private favouriteBeersSubject = new BehaviorSubject<FavouriteBeer[]>(this.favouriteBeers);

    constructor(private storageService: StorageService) { this.init() }

    init() {
        this.loadFavouriteBeersFromStorage()
    }

    /**
     * Load and update favorite beers from storage.
     */
    async loadFavouriteBeersFromStorage(): Promise<void> {
        // Retrieve favorite beers from storage, or use default data if not found
        this.favouriteBeers = await this.storageService.get('favouriteBeers') || FAVOURITE_BEERS;
        // Notify subscribers about the updated favorite beers
        this.updateFavouriteBeers();
    }

    /**
     * Returns the favouriteBeersSubject as an observable, allowing other
     * components to subscribe to changes in the favorite beers.
     */
    getFavouriteBeers(): Observable<FavouriteBeer[]> {
        return this.favouriteBeersSubject.asObservable();
    }

    /**
     * Delete favourite beer using fbid and notify subscribers
     */
    async deleteFavouriteBeer(fbid: number): Promise<void> {
        const index = this.favouriteBeers.findIndex(beer => beer.id === fbid);
        if (index !== -1) {
            this.favouriteBeers.splice(index, 1);
            this.updateFavouriteBeers();
        }
    }

    /**
     * Update favorite beers state and persist changes to storage.
     * Emits updated favorite beers to subscribers and updates storage.
     */
    private async updateFavouriteBeers(): Promise<void> {
        this.favouriteBeersSubject.next(this.favouriteBeers);
        await this.storageService.set('favouriteBeers', this.favouriteBeers);
    }

}


