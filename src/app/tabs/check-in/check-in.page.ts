import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import Chart from 'chart.js/auto';
import { FormsModule } from '@angular/forms';
import { CHECK_IN_LOG, VENUES } from 'src/app/data';
import { CheckInService } from 'src/app/services/check-in.service';
import { log } from 'console';

@Component({
    selector: 'app-check-in',
    templateUrl: './check-in.page.html',
    standalone: true,
    imports: [IonicModule, CommonModule, FormsModule]
})
export class CheckInPage implements OnInit {

    @ViewChild('myChart', { static: true }) canvas: any;
    chart: any;
    checkInData: Array<any>; // all stored data

    constructor(private cis: CheckInService) { }

    async ngOnInit() {
        this.subscribeToCheckIn();
    }

    /**
     * Retrieve check in data and subscribes to the changes.
     */
    subscribeToCheckIn() {
        this.cis.getCheckInsObservable().subscribe((checkIns: any[]) => {
            // Access and use the check-ins data here
            this.prepareDataForChart(checkIns)
        });
    }

    /**
     * Format check in data for use in chart
     * STRUCTURE: {date: '22-05-04', venue_id: 306, name: 'Sunnybank Hotel'}
     */
    prepareDataForChart(data: any[]) {
        this.checkInData = data.map((item) => {
            const venue = VENUES.find((venue) => venue.id === item.venue_id);
            const name = venue ? venue.name : 'Unknown Venue';
            return { ...item, name };
        });
        this.showAllData();
    }

    /**
     * display the chart with all data
     */
    showAllData(): void {
        let data = this.totalCheckInsByVenue(this.checkInData);
        this.createChart(data);
    }

    /**
     * Display the top 5 most visited venues
     */
    topFiveVisited(): void {
        const dataObject = this.totalCheckInsByVenue(this.checkInData);
        // Convert the object into an array of key-value pairs
        const data = Object.entries(dataObject);
        const sortedData = data.sort((a, b) => b[1] - a[1]);
        const highestValues = sortedData.slice(0, 5);
        // Convert the sorted array back into an object
        const obj = {};
        for (const [key, value] of highestValues) {
            obj[key] = value;
        }
        this.createChart(obj);
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

    createChart(data: object) {

        const labels = Object.keys(data);
        const values = Object.values(data);

        this.chart?.destroy(); // Destroy existing chart if it exists

        this.chart = new Chart(this.canvas.nativeElement, {
            type: 'pie',
            data: {
                labels: labels,
                datasets: [{
                    label: '# of Votes',
                    data: values,
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                layout: {
                    padding: 20
                }
            }
        });
    }

}
