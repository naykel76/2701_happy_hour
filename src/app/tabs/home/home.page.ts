import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { VENUES } from 'src/app/data';
import { Venue } from 'src/app/definitions';
import { CheckInService } from 'src/app/services/check-in.service';
import { UserService } from 'src/app/services/user.service';
import { format, parseISO } from 'date-fns';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    standalone: true,
    imports: [IonicModule, RouterLink, CommonModule],
})
export class HomePage {

    totalCheckedIn: number = 0;
    isCheckedIn: boolean | null;
    // location: boolean;

    constructor(private userService: UserService, private cis: CheckInService) { }

    async ngOnInit() {
        this.setTotalCheckedIn();
        this.setCheckInStatus();
    }

    async setCheckInStatus() {
        let checkInData = await this.cis.getCheckInData();
        this.isCheckedIn = checkInData !== null ? checkInData.status : false;
    }

    /**
     * Check into venue and update log
     */
    checkIn(venue_id: number) {
        const currentDate = new Date();
        const formattedDate = format(currentDate, 'yyyy-MM-dd');
        this.cis.addCheckIn({ date: formattedDate, venue_id: venue_id });
    }

    /**
     * Check out and clear storage
     */
    checkOut(): void {
        this.cis.checkOut();
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
}
