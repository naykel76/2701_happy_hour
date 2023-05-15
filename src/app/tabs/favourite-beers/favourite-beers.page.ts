import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FavouriteBeerService } from 'src/app/services/favourite-beer.service';
import { FavouriteBeer } from 'src/app/definitions';

@Component({
    selector: 'app-favourite-beers',
    templateUrl: './favourite-beers.page.html',
    standalone: true,
    imports: [IonicModule, CommonModule, FormsModule]
})
export class FavouriteBeersPage implements OnInit {

    constructor(private fbs: FavouriteBeerService) { }

    favBeerList: FavouriteBeer[];

    ngOnInit(): void {
        this.getFavouriteBeers();
        console.log(this.favBeerList);

    }

    /**
     * display a list of the primary resource
     */
    getFavouriteBeers(): void {
        this.favBeerList = this.fbs.getFavouriteBeers();
    }





    // constructor(private modalCtrl: ModalController) { }

    // /**
    //  * Open the modal to add beer
    //  */
    // async addBeer() {

    //     const modal = await this.modalCtrl.create({
    //         component: BeerModalComponent,
    //         componentProps: { editing: false }
    //     })

    //     modal.onDidDismiss()
    //         .then((res) => {
    //             if (res.role == 'cancel') {
    //                 console.log('do nothing');
    //             } else {
    //                 console.log(res.data);
    //             }
    //         });

    //     return modal.present();
    // }

    // /**
    //  * Open the modal to add beer
    //  */
    // async displayBeer(beer: object) {

    //     const modal = await this.modalCtrl.create({
    //         component: BeerModalComponent,
    //         componentProps: { editing: true, beer: beer }
    //     })

    //     modal.onDidDismiss()
    //         .then((res) => {
    //             if (res.role == 'cancel') {
    //                 console.log('do nothing');
    //             } else {
    //                 // edit and back actions
    //                 console.log(res.data);
    //             }
    //         });

    //     return modal.present();
    // }

    /**
    * delete selected beer
    */
    delete(id: number): void {
        this.favBeerList = this.favBeerList.filter(item => item.id !== id)
    }

    // // get the lowest price to display with each beer
    // // getLowest() {
    // //     for (const beer of MYBEERS) {
    // //         let lowestPrice = Infinity;
    // //         for (const venue of beer.venues) {
    // //             if (venue.price < lowestPrice) {
    // //                 lowestPrice = venue.price;
    // //             }
    // //         }
    // //         console.log(`${beer.name}: ${lowestPrice}`);
    // //     }
    // // }

}
