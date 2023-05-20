import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { VENUES } from '../data';

@Component({
    selector: 'nk-venue-pricing',
    templateUrl: './venue-pricing.component.html',
    standalone: true,
    imports: [IonicModule, CommonModule, FormsModule]

})
export class VenuePricingComponent implements OnInit {

    isOpen: boolean = false;
    editing: boolean = false;
    // NK::TD if venue already exists, then exclude
    venues = VENUES;
    price: any;

    constructor() { console.table(this.venues)}

    ngOnInit() { }
    open() { this.isOpen = true; }
    cancel() { this.isOpen = false; }
    select() { }

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

