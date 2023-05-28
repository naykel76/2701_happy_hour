import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { VENUES } from 'src/app/data';
import { CheckInService } from 'src/app/services/check-in.service';
import { UserService } from 'src/app/services/user.service';
import { format, parseISO } from 'date-fns';
import { CommonModule } from '@angular/common';
import { helpers } from 'src/app/helpers';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    standalone: true,
    imports: [IonicModule, RouterLink, CommonModule],
})
export class HomePage {

    totalCheckedIn: number = 0;
    isCheckedIn: boolean | null;
    checkedInVenue: string | '';
    selectableVenues = VENUES;

    constructor(private userService: UserService, private cis: CheckInService) { }

    async ngOnInit() {
        this.setTotalCheckedIn();
        this.setCheckInStatus();
    }

    async setCheckInStatus() {
        let checkInData = await this.cis.getCheckInData();
        this.isCheckedIn = checkInData !== null ? checkInData.status : false;
        this.checkedInVenue = checkInData !== null ? checkInData.venue_name : '';
        console.log(checkInData);
    }




    /**
     * Check out and clear storage
     */
    async checkOut() {
        this.cis.checkOut();
        await this.setCheckInStatus()
    }

    /**
     * Get the total number of people check in to all venues
     */
    setTotalCheckedIn(): void {
        this.totalCheckedIn = this.cis.getTotalCheckedIn()
    }

    /**
     * Open the user profile modal
     */
    async displayEditUserProfile() {
        await this.userService.displayEditUserProfile();
    }

    /**
     *
     */
    selectVenue(event: any) {
        const selectedVenue = event.target.value;
        this.checkedInVenue = selectedVenue.name;

        this.checkIn(selectedVenue.id);
    }


    /**
     * Check into venue with current date and update log
     */
    async checkIn(venue_id: number) {
        await this.cis.addCheckIn({ date: helpers.getCurrentDate(), venue_id: venue_id });
        await this.setCheckInStatus();
    }

    addRandomCheckIn() {
        this.cis.addRandomCheckIn();
    }

}
