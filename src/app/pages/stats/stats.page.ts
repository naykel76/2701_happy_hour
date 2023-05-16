import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';

@Component({
    selector: 'app-stats',
    templateUrl: './stats.page.html',
    standalone: true,
    imports: [IonicModule, CommonModule, FormsModule]
})
export class StatsPage implements OnInit {

    constructor(private modal: ModalController) { }

    ngOnInit() { }

    /**
     * close the modal
     */
    cancel() {
        this.modal.dismiss(null, 'cancel');
    }

    /**
     * chart filter
     */
    filterByWeek() {
        this.modal.dismiss(null, 'cancel');
    }

    /**
     * chart filter
     */
    filterByMonth() {
        console.log('change avatar clicked');
    }

    /**
     * chart filter
     */
    filterByYear() {
        console.log('change avatar clicked');
    }

}
