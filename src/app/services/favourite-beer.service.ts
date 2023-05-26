import { Injectable } from '@angular/core';
import { FAVOURITE_BEERS } from '../data';
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

    init() { this.loadFavouriteBeersFromStorage() }

    /**
     * Load and update favorite beers from storage.
     */
    async loadFavouriteBeersFromStorage(): Promise<void> {
        // Retrieve favorite beers from storage, or use default data if not found
        this.favouriteBeers = await this.storageService.get('favouriteBeers') || FAVOURITE_BEERS;
        // Notify subscribers about the updated favorite beers
        this.updateFavouriteBeersFromStorage();
    }

    /**
     * Returns the favouriteBeersSubject as an observable, allowing other
     * components to subscribe to changes in the favorite beers.
     */
    getFavouriteBeers(): Observable<FavouriteBeer[]> {
        return this.favouriteBeersSubject.asObservable();
    }

    async save(favBeer: FavouriteBeer): Promise<void> {
        const index = this.getItemIndex(favBeer.id);

        // if the index exists, update the existing FormRecord, else create it
        if (index !== -1) {
            this.favouriteBeers[index] = favBeer;
        } else {
            this.favouriteBeers.push(favBeer);
        }

        this.updateFavouriteBeersFromStorage();
    }

    /**
     * Delete favourite beer using fbid and notify subscribers
     */
    async delete(fbid: number): Promise<void> {
        const index = this.getItemIndex(fbid);
        if (index !== -1) {
            this.favouriteBeers.splice(index, 1);
            this.updateFavouriteBeersFromStorage();
        }
    }

    /**
     * Get the array index using item id
     */
    getItemIndex(id: number): number {
        return this.favouriteBeers.findIndex(beer => beer.id === id)
    }

    /**
     * Update favorite beers state and persist changes to storage.
     * Emits updated favorite beers to subscribers and updates storage.
     */
    private async updateFavouriteBeersFromStorage(): Promise<void> {
        await this.updateCheapestVenues();
        await this.storageService.set('favouriteBeers', this.favouriteBeers);
        this.favouriteBeersSubject.next(this.favouriteBeers);
    }


    /**
     *  Iterate through each favorite beer, find the cheapest venue, and update
     *  the favouriteBeers array
     */
    async updateCheapestVenues(): Promise<void> {
        this.favouriteBeers.forEach(beer => {
            if (beer && beer.venues && beer.venues.length > 0) {
                const cheapestVenue = beer.venues.reduce((minVenue, venue) => {
                    if (venue.price < minVenue.price) {
                        return venue;
                    } else {
                        return minVenue;
                    }
                });
                beer.cheapest = {
                    venue: cheapestVenue.name,
                    price: cheapestVenue.price
                };
                // update the main array
                const index = this.favouriteBeers.indexOf(beer);
                if (index !== -1) {
                    this.favouriteBeers[index] = beer;
                }
            }
        });
    }

}

