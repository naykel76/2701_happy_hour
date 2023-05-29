import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { CHECK_IN_LOG, VENUES } from '../data';
import { Venue } from '../definitions';
import { helpers } from '../helpers';

@Injectable({
    providedIn: 'root'
})
export class CheckInService {

    private checkInsSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
    private checkIns: any[] = [];

    constructor(private storageService: StorageService) {
        this.loadCheckInDataFromStorage();
    }

    /**
     * Get the check-in data from storage or set if null
     */
    private async loadCheckInDataFromStorage(): Promise<void> {
        this.checkIns = await this.storageService.get('checkIns') || CHECK_IN_LOG;
        this.updateStorageCheckIns();
    }

    /**
     * Create the check-in observable "the subject"
     */
    getCheckInsObservable(): Observable<any[]> {
        return this.checkInsSubject.asObservable();
    }

    /**
     * Update check-in state and persist changes to storage then notify the
     * observable about the updated check-ins.
     */
    private async updateStorageCheckIns(): Promise<void> {
        await this.storageService.set('checkIns', this.checkIns);
        this.checkInsSubject.next(this.checkIns);
    }

    /**
     * add check to log and set check in status = true
     */
    async addCheckIn(checkIn: any): Promise<void> {
        this.checkIns.push(checkIn);
        await this.storageService.set('checkInData', { status: true, venue_id: checkIn.venue_id })
        await this.updateStorageCheckIns();
    }

    /**
     * clear check in data and checkout
     */
    async checkOut(): Promise<void> {
        await this.storageService.remove('checkInData');
    }

    /**
     * get the data for the current check in
     */
    async getCheckInData(): Promise<{ status: boolean, venue_id: number, venue_name: string }> | null {
        const checkInData = await this.storageService.get('checkInData');
        if (checkInData) {
            const { status, venue_id } = checkInData;
            const venue = VENUES.find((v: Venue) => v.id === venue_id);
            const venue_name = venue ? venue.name : '';
            return { status, venue_id, venue_name };
        }
        await this.updateStorageCheckIns();
        return null;
    }

    /**
     * Clear the check in data but do not remove from storage
     */
    clearCheckInData() {
        this.checkIns = [];
        this.checkOut();
        this.updateStorageCheckIns();
    }

    /**
     * Clear the check in data but do not remove from storage
     */
    restoreOriginalData() {
        this.storageService.remove('checkIns');
        this.loadCheckInDataFromStorage();
        this.updateStorageCheckIns();
    }

    /**
     *
     * Calculate the total number of people checked in
     */
    getTotalCheckedIn(): number | null {
        let total = 0;

        VENUES.forEach((venue: Venue) => {
            if (venue.checked_in) {
                total += venue.checked_in;
            }
        });

        return total;
    }

    /**
     * add a random check in for testing
     */
    addRandomCheckIn(): void {
        this.addCheckIn({
            date: helpers.getRandomDateWithinLastYear(),
            venue_id: helpers.getRandomNumber(301, 308)
        });
    }

}
