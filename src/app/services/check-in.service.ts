import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { CHECK_IN_LOG, VENUES } from '../data';
import { Venue } from '../definitions';

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
    addCheckIn(checkIn: any): void {
        this.checkIns.push(checkIn);
        this.storageService.set('checkInData', { status: true, venue_id: checkIn.venue_id })
        this.updateStorageCheckIns();
    }

    /**
     * clear check in data and checkout
     */
    async checkOut(): Promise<void> {
        await this.storageService.remove('checkInData');
    }

    /**
     *
     */
    async getCheckInData(): Promise<{ status: boolean, venue_id: number }> | null {
        return await this.storageService.get('checkInData')
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

}
