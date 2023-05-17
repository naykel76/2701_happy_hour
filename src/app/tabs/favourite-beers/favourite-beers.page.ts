import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FavouriteBeerService } from 'src/app/services/favourite-beer.service';
import { FavouriteBeer } from 'src/app/definitions';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-favourite-beers',
    templateUrl: './favourite-beers.page.html',
    standalone: true,
    imports: [IonicModule, CommonModule, FormsModule]
})

export class FavouriteBeersPage implements OnInit {

    env = environment;
    favBeers: FavouriteBeer[];

    constructor(private fbs: FavouriteBeerService) { }

    ngOnInit(): void {
        this.getFavouriteBeers();
    }

    getFavouriteBeers(): void {
        this.fbs.getFavouriteBeers()
            .subscribe(fb => this.favBeers = fb);
        // console.log(this.favBeers);
    }

    addFavouriteBeer(beer: FavouriteBeer): void {
        this.fbs.addFavouriteBeer(beer);
    }

    updateFavouriteBeer(updatedBeer: FavouriteBeer): void {
        this.fbs.updateFavouriteBeer(updatedBeer);
    }

    /**
     * delete item by id
     */
    delete(id: number): void {
        this.fbs.deleteFavouriteBeer(id);
    }
}

