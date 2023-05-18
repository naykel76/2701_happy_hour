import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FavouriteBeerService } from 'src/app/services/favourite-beer.service';
import { FavouriteBeer } from 'src/app/definitions';
import { environment } from 'src/environments/environment';
import { TestingComponent } from 'src/app/components/testing/testing';

@Component({
    selector: 'app-favourite-beers',
    templateUrl: './favourite-beers.page.html',
    standalone: true,
    imports: [IonicModule, CommonModule, FormsModule, TestingComponent]
})

export class FavouriteBeersPage implements OnInit {

    env = environment;
    favBeers: FavouriteBeer[];

    constructor(private fbs: FavouriteBeerService) { }

    ngOnInit(): void {
        this.getFavouriteBeers();
    }

    /**
     * Retrieves the favorite beers from the FavouriteBeerService and
     * subscribes to the changes. Updates the favBeers property with the
     * latest list of favorite beers.
     */
    getFavouriteBeers(): void {
        this.fbs.getFavouriteBeers()
            .subscribe(fb => this.favBeers = fb);
    }

    /**
     * Deletes a favorite beer by its ID. Calls the deleteFavouriteBeer method
     * of FavouriteBeerService to remove the beer from the list.
     * @param fbid favorite_beer_id to be deleted.
     */
    delete(fbid: number): void {
        this.fbs.deleteFavouriteBeer(fbid);
    }

}

