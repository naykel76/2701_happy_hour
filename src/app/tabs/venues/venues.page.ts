import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { VENUES } from 'src/app/data';

@Component({
    selector: 'app-venues',
    templateUrl: './venues.page.html',
    standalone: true,
    imports: [IonicModule, CommonModule]
})
export class VenuesPage implements OnInit {

    venues = VENUES;

    constructor() { }
    ngOnInit() { }

}
