import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import { FavouriteBeerService } from 'src/app/services/favourite-beer.service';
import { FavouriteBeer } from 'src/app/definitions';
import { environment } from 'src/environments/environment';
import { TestingComponent } from 'src/app/components/testing/testing';
import { CreateEditComponent } from './create-edit.component';

@Component({
    selector: 'app-favourite-beers',
    templateUrl: './favourite-beers.page.html',
    standalone: true,
    imports: [IonicModule, CommonModule, FormsModule, TestingComponent, CreateEditComponent]
})



export class FavouriteBeersPage implements OnInit {

    env = environment;
    favBeers: FavouriteBeer[];

    constructor(private fbs: FavouriteBeerService, private modal: ModalController) { }

    ngOnInit(): void {
        this.getFavouriteBeers();
        // console.log(this.favBeers);
    }

    /**
     * Retrieves the favorite beers from the FavouriteBeerService and
     * subscribes to the changes. Updates the favBeers property with the
     * latest list of favorite beers.
     */
    getFavouriteBeers(): void {
        // this.fbs.getFavouriteBeers()
        //     .subscribe(fb => this.favBeers = fb);

        this.fbs.getFavouriteBeers()
            .subscribe(fb => {
                this.favBeers = fb;
                console.log(this.favBeers); // Check if the data is up-to-date
            });
    }


    /**
     * Open modal to create, edit and display the selected favourite
     */
    async createEdit(favB: FavouriteBeer | null, editing: boolean) {

        const modal = await this.modal.create({
            component: CreateEditComponent,
            componentProps: { editing: editing, editingItem: favB }
        })

        modal.onDidDismiss()
            // this will receive back an updated favBeers object
            .then((res) => {
                if (res.role == 'cancel') {
                    console.log('do nothing');
                } else {
                    this.fbs.save(res.data);
                }
            });

        return modal.present();
    }

    /**
     * Deletes a favorite beer by its ID. Calls the delete method
     * of FavouriteBeerService to remove the beer from the list.
     * @param fbid favorite_beer_id to be deleted.
     */
    delete(fbid: number): void {
        this.fbs.delete(fbid);
    }

}

