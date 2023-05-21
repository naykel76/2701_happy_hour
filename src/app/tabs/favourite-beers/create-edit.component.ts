import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import { FavouriteBeer } from '../../definitions';
import { BEERS } from 'src/app/data';
import { VenuePricingComponent } from 'src/app/components/venue-pricing.component';


@Component({
    selector: 'favourite-beer-create-edit',
    templateUrl: './create-edit.component.html',
    standalone: true,
    imports: [IonicModule, FormsModule, CommonModule, VenuePricingComponent]
})
export class CreateEditComponent {

    beers = BEERS; // data
    editing: boolean;
    editingItem: FavouriteBeer; // item to create/edit
    selectedBeer: any; // this is for select drop down it

    constructor(private modal: ModalController) { }

    /**
     * When item is selected from the dropdown, create the editingItem object
     * and set the beer = to the selected beer
     */
    onSelectChange(event: any): void {
        this.editingItem = {
            id: this.getRandomId(1000, 2000),
            beer: event.detail.value
        };
    }

    /**
     * close the modal passing back editingItem
     */
    confirm() {
        this.modal.dismiss(this.editingItem, 'saved');
    }

    /**
     * close the modal setting data = null, and role = cancel
     */
    cancel() {
        this.modal.dismiss(null, 'cancel');
    }

    /**
     * this is just a hacky way to create a random id for testing purpose
     */
    getRandomId(min: number, max: number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    /**
     * ----------------------------------------------------------
     * VENUE PRICING
     * ----------------------------------------------------------
     * Changes are not final until the favourite-beer is saved.
     */


    /**
     * Add or update venues of the current editing item
     */
    addUpdateVenue(venueData: any): void {
        this.editingItem.venues = this.editingItem.venues || [];
        this.editingItem.venues.push(venueData);
    }

    /**
     * remove venue from the editingItem.venues array
     */
    removeVenue(venue_id: number): void {
        const currentVenues = this.editingItem.venues;
        const updatedVenues = currentVenues.filter(items => items.id !== venue_id);
        this.editingItem.venues = updatedVenues;
    }

}

