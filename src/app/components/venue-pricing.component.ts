import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { VENUES } from '../data';
import { Venue } from '../definitions';

@Component({
    selector: 'nk-venue-pricing',
    templateUrl: './venue-pricing.component.html',
    standalone: true,
    imports: [IonicModule, CommonModule, FormsModule],
    styles: [`ion-modal { --background: rgba(0, 0, 0, 0.9); }`]
})
export class VenuePricingComponent {

    // NK::TD if venue already exists, then exclude
    selectableVenues = VENUES;
    isOpen: boolean = false;
    editing: boolean = false;
    price: any;
    venue: Venue;
    goodToGo: boolean = false;

    @Output() newVenueEvent = new EventEmitter<{ name: string, price: number }>();

    /**
     * Strip the dollar sign from the price and emit event
     */
    confirm() {
        let convertedPrice = parseFloat(this.price.substring(1));
        this.newVenueEvent.emit({ name: this.venue.name, price: convertedPrice });
        this.reset();
    }

    /**
     * open the modal and display 'select' options
     */
    addVenuePrice() { this.isOpen = true; }

    /**
     * Close the modal and reset fields
     */
    cancel() {
        this.reset();
    }

    /**
     * reset class properties
     */
    reset() {
        this.price = undefined;
        this.venue = undefined;
        this.goodToGo = false;
        this.isOpen = false;
    }

    /**
     * Perform basic validation actions to allow save
     */
    validate() {
        this.goodToGo = this.venue && this.price;
    }

    updateFormattedPrice() {
        // Remove non-numeric characters from the inputted price string
        const numericValue = this.price.replace(/[^0-9]/g, '');

        // If the numeric value is not empty, divide by 100 and format as currency
        if (numericValue !== '') {
            const decimalValue = parseFloat(numericValue) / 100;
            const formatter = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            });
            this.price = formatter.format(decimalValue);
        }
    }

}

