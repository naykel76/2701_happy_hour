import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import Chart from 'chart.js/auto';
import { FormsModule } from '@angular/forms';
import { CHECK_IN_LOG, VENUES } from './data';

@Component({
    selector: 'app-dev',
    templateUrl: './dev.page.html',
    standalone: true,
    imports: [IonicModule, CommonModule, FormsModule]
})
export class DevPage {

    data;

    constructor() {
        const dataArray = this.generateRandomData();
        this.data = dataArray;
        // console.log(dataArray);
    }
    getRandomDate = (start, end) => {
        const startDate = new Date(start).getTime();
        const endDate = new Date(end).getTime();
        const randomTime = Math.random() * (endDate - startDate) + startDate;
        return new Date(randomTime).toLocaleDateString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        });
    };

    generateRandomData = () => {
        const data = [];
        const totals = [5, 17, 3, 25, 2, 13, 10, 25];
        let totalIndex = 0;

        while (data.length < 100) {
            const date = this.getRandomDate('2022-05-24', '2023-05-24');
            const venue_id = 301 + Math.floor(Math.random() * 8);
            const occurrences = totals[totalIndex];
            totalIndex = (totalIndex + 1) % totals.length;

            for (let j = 0; j < occurrences && data.length < 100; j++) {
                data.push({ date, venue_id });
            }
        }

        return data;
    };

}
