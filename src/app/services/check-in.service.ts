import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { CHECK_IN_LOG } from '../data';

@Injectable({
    providedIn: 'root'
})
export class CheckInService {
    private checkIns: any[] = [];
    private checkInsSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

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

    // addCheckIn(checkIn: any) {
    //     this.checkIns.push(checkIn);
    //     this.updateCheckIns();
    // }

    // private updateCheckIns() {
    //     this.checkInsSubject.next(this.checkIns);
    //     this.storageService.set('checkIns', this.checkIns);
    // }


}
