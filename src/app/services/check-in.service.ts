import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { CHECK_IN_LOG } from '../data';

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
    addCheckIn(checkIn: any) {
        this.checkIns.push(checkIn);
        this.storageService.set('isCheckedIn', true)
        this.updateStorageCheckIns();
    }

    checkOut() {
        this.storageService.set('isCheckedIn', false)
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

}
