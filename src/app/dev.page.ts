import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import Chart from 'chart.js/auto';
import { FormsModule } from '@angular/forms';
import { CHECK_IN_LOG, VENUES } from './data';

@Component({
    selector: 'app-dev',
    template: `
    <ion-content [fullscreen]="true">
            <ion-card>
                <canvas #myChart height=300></canvas>
            </ion-card>
    </ion-content>`,
    standalone: true,
    imports: [IonicModule, CommonModule, FormsModule]
})
export class DevPage {

    @ViewChild('myChart', { static: true }) canvas: any;
    chart: any;

    venues = VENUES;
    checkInLog = CHECK_IN_LOG;
    checkInData: Array<any>;

    constructor() { }

    ngAfterViewInit() {
        // set component data
        this.checkInData = this.setData();
        // get venue-check-in totals
        let data = this.totalCheckInsByVenue(this.checkInData);
        // map the values for the chart
        const labels = Object.keys(data);
        const values = Object.values(data);
        // create the chart
        this.createChart(labels, values)
    }

    /**
     * Return check in data formatted for chart
     * STRUCTURE: {date: '22-05-04', venue_id: 306, name: 'Sunnybank Hotel'}
     */
    setData() {
        // item is each item in the array
        const data = this.checkInLog.map((item) => {
            // from 'venues', return the {venue(s)} where the venue.id from
            // venues array equals the venue_id of the current item.venue_id
            const venue = this.venues.find((venue) => venue.id === item.venue_id);
            // if the venue exists, then title = venue.name
            const name = venue ? venue.name : 'Unknown Venue';
            return { ...item, name };
        });

        return data;
    }

    createChart(labels, values) {
        this.chart = new Chart(this.canvas.nativeElement, {
            type: 'pie',
            data: {
                labels: labels,
                datasets: [{
                    data: values,
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        });
    }

    /**
     * {Sunnybank Hotel: 15, Calamvale Hotel: 13, …}
     */
    totalCheckInsByVenue(data: any): object {
        return data.reduce((count, item) => {
            const { name } = item;
            count[name] = (count[name] || 0) + 1;
            return count;
        }, {});
    }

    // topFive() { }
}
