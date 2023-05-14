import { Component, ViewChild, OnInit, CUSTOM_ELEMENTS_SCHEMA, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GoogleMap, Marker } from '@capacitor/google-maps';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-find-mates',
    templateUrl: './find-mates.page.html',
    standalone: true,
    styles: [`capacitor-google-map { display: inline-block; width: 100%; height: 100%; }`],
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
                zoom: 8,
            },
        });
        this.addMarkers();
    }

    async addMarkers() {
        const markers: Marker[] = [
            {
                title: 'Runcorn Tavern',
                coordinate: {
                    lat: -27.595725912524248,
                    lng: 153.06536734191715
                },
                snippet: 'some snippet'
            },
            {
                title: 'Souths Sports Club',
                coordinate: {
                    lat: -27.576548,
                    lng: 153.0161967
                },
                snippet: 'another snippet'
            },
        ]

        await this.map.addMarkers(markers);

    }

}
