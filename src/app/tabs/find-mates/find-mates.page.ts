import { Component, ViewChild, CUSTOM_ELEMENTS_SCHEMA, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GoogleMap, Marker } from '@capacitor/google-maps';
import { environment } from 'src/environments/environment';
import { VENUES } from 'src/app/data';
import { Venue } from 'src/app/definitions';

@Component({
    selector: 'app-find-mates',
    templateUrl: './find-mates.page.html',
    standalone: true,
    styles: [`
        ion-content { --background: transparent; }
        capacitor-google-map { display: inline-block; width: 100%; height: 100%; }`
    ],
    imports: [IonicModule, CommonModule, FormsModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FindMatesPage {

    @ViewChild('map') mapRef: ElementRef;
    map: GoogleMap;

    ionViewDidEnter() {
        this.createMap()
    }

    async createMap() {
        this.map = await GoogleMap.create({
            id: 'find-mates-map',
            apiKey: environment.mapsKey,
            element: this.mapRef.nativeElement,
            forceCreate: true, // ? not sure if required
            config: {
                center: {
                    lat: -27.595725912524248,
                    lng: 153.06536734191715
                },
                zoom: 12,
            },
        });
        this.addMarkers();
    }

    async addMarkers() {

        // map stored venues to markers
        const markers: Marker[] = VENUES.map((venue: Venue) => {
            return {
                title: venue.name,
                coordinate: {
                    lat: venue.coordinates.lat,
                    lng: venue.coordinates.lng
                },
                snippet: 'some snippet' // You can customize the snippet if needed
            };
        });

        await this.map.addMarkers(markers);

    }




}
