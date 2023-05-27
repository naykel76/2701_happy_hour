import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { FormsModule } from '@angular/forms';
import { VENUES } from 'src/app/data';
import { CheckInService } from 'src/app/services/check-in.service';
import { environment } from 'src/environments/environment';
import { log } from 'console';

@Component({
    selector: 'app-check-in',
    templateUrl: './check-in.page.html',
    standalone: true,
    imports: [IonicModule, CommonModule, FormsModule]
})
export class CheckInPage implements OnInit {

    @ViewChild('myChart', { static: true }) canvas: any;
    checkInData: Array<any>;
    checkInDataFiltered: Array<any>;
    env = environment;
    chart: any;

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

        this.showData(365);
    }

    /**
     * display the chart with all data
     */
    showData(days: number): void {
        let data = this.totalCheckInsByVenue(this.filterByNumDays(this.checkInData, days));
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

    /**
    * filter data by number of days
    */
    filterByNumDays(data: any[], days: number): any[] {

        const currentDate = new Date();

        // Calculate the start date (n days ago)
        const startDate = new Date();
        startDate.setDate(currentDate.getDate() - days);

        // Define the end date (current date)
        const endDate = currentDate;

        // Filter the array based on the dates
        const filteredDates = data.filter(event => {
            const eventDate = new Date(event.date);
            return eventDate >= startDate && eventDate <= endDate;
        });

        return filteredDates;
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
                    label: '# Check Ins',
                    data: values,
                    borderWidth: 1
                }]
            },
            plugins: [ChartDataLabels],
            options: {
                responsive: true,
                maintainAspectRatio: false,
                layout: {
                    padding: 20
                },
                plugins: {
                    datalabels: {
                        color: 'white'
                    }
                }
            },

        });
    }

    checkIn(date: string, venue_id: number) {
        this.cis.addCheckIn({ date: date, venue_id: venue_id });
    }

    clearCheckInData() {
        this.cis.clearCheckInData();
    }

    restoreOriginalData() {
        this.cis.restoreOriginalData();
    }

    /**
     * ----------------------------------------------------------
     * Helpers and testing
     * ----------------------------------------------------------
     */

    addRandomCheckIn() {
        this.cis.addCheckIn({ date: this.getRandomDateWithinLastYear(), venue_id: this.getRandomNumber() });
    }

    getRandomNumber(min = 301, max = 308) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    getRandomDateWithinLastYear() {
        const today = new Date();
        const pastDate = new Date(today.getFullYear() - 1, today.getMonth(), today.getDate());
        const randomTimestamp = Math.floor(Math.random() * (today.getTime() - pastDate.getTime())) + pastDate.getTime();
        const randomDate = new Date(randomTimestamp);
        return randomDate.toISOString().split('T')[0];
    }
}
