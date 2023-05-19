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

    /**
     * Delete favourite beer using fbid and notify subscribers
     */
    async deleteFavouriteBeer(fbid: number): Promise<void> {
        const index = this.favouriteBeers.findIndex(beer => beer.id === fbid);
        if (index !== -1) {
            this.favouriteBeers.splice(index, 1);
            this.updateFavouriteBeersFromStorage();
        }
    }

    /**
     * Update favorite beers state and persist changes to storage.
     * Emits updated favorite beers to subscribers and updates storage.
     */
    private async updateFavouriteBeersFromStorage(): Promise<void> {
        await this.storageService.set('favouriteBeers', this.favouriteBeers);
        this.favouriteBeersSubject.next(this.favouriteBeers);
    }

}



//   async addFavouriteBeer(beer: FavouriteBeer): Promise<void> {
//     this.favouriteBeers.push(beer);
//     await this.updateStorage();
//   }

//   async updateFavouriteBeer(updatedBeer: FavouriteBeer): Promise<void> {
//     const index = this.favouriteBeers.findIndex(beer => beer.id === updatedBeer.id);
//     if (index !== -1) {
//       this.favouriteBeers[index] = updatedBeer;
//       await this.updateStorage();
//     }
//   }

//   private async updateStorage(): Promise<void> {
//     await this.storage.set(this.storageKey, this.favouriteBeers);
//     this.fbSubject.next(this.favouriteBeers);
//   }

//   private async loadFavouriteBeersFromStorage(): Promise<void> {
//     const storedFavouriteBeers = await this.storage.get(this.storageKey);
//     if (storedFavouriteBeers) {
//       this.favouriteBeers = storedFavouriteBeers;
//       this.fbSubject.next(this.favouriteBeers);
//     }
//   }
// }
