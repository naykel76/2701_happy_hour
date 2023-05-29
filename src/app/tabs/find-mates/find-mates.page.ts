import { Component, ViewChild, CUSTOM_ELEMENTS_SCHEMA, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, PopoverController } from '@ionic/angular';
import { GoogleMap, Marker } from '@capacitor/google-maps';
import { environment } from 'src/environments/environment';
import { VENUES } from 'src/app/data';
import { Venue } from 'src/app/definitions';
import { Router } from '@angular/router';
import { PopoverComponent } from 'src/app/components/popover.component';

@Component({
    selector: 'app-find-mates',
    templateUrl: './find-mates.page.html',
    standalone: true,
    styles: [`
        ion-content { --background: transparent; }
        capacitor-google-map { display: inline-block; width: 100%; height: 100%;}`
    ],
    imports: [IonicModule, CommonModule, FormsModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FindMatesPage {

    @ViewChild('map') mapRef: ElementRef;
    map: GoogleMap;
    checkedIn: number = 0;

    constructor(private router: Router, private popOver: PopoverController) { }

    ionViewDidEnter() {
        this.createMap()
    }

    async createMap() {
        this.map = await GoogleMap.create({
            id: 'find-mates-map',
            apiKey: environment.mapsKey,
            element: this.mapRef.nativeElement,
            config: {
                center: {
                    lat: -27.595725912524248,
                    lng: 153.06536734191715
                },
                zoom: 12,
                disableDefaultUI: true
            },
        });

        this.addMarkers();

        this.map.setOnMarkerClickListener((marker) => this.onMarkerClick(marker));

    }

    /**
     * Map venue data to markers
     */
    async addMarkers() {

        const image = "/assets/images/pin.png";

        const markers: Marker[] = VENUES.map((venue: Venue) => {

            let title = venue.checked_in > 0
                ? venue.name + ' - Mates Checked In: ' + venue.checked_in
                : venue.name  + ' - Mates Checked In: 0'
            return {
                title: title,
                coordinate: {
                    lat: venue.coordinates.lat,
                    lng: venue.coordinates.lng
                },
                iconUrl: image,
                snippet: venue.address // You can customize the snippet if needed
            };
        });

        await this.map.addMarkers(markers);

    }

    async onMarkerClick(marker: any) {
        const popover = await this.popOver.create({
            component: PopoverComponent,
            componentProps: {
                data: marker,
            },
            event: marker,
            translucent: true,
        });

        await popover.present();
    }


    /**
     * open the chart to display check in stats
     */
    stats() {
        this.router.navigateByUrl('/check-in');
    }

}
