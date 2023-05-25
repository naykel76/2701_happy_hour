import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { User } from '../definitions';
import { USER } from '../data';
import { Router } from '@angular/router';
import { ProfileModalComponent } from '../pages/profile/profile-modal.component';
import { ModalController } from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(
        private storageService: StorageService,
        private router: Router,
        private modal: ModalController
    ) { }

    /** -------------------------------------------------------------------
     * Storage getter and setters
     * --------------------------------------------------------------------
     */
    async setUserInStorage(): Promise<void> {
        await this.storageService.set('user', USER);
    }

    async getUserFromStorage(): Promise<User> {
        return await this.storageService.get('user');
    }

    async setPassword(password: any) {
        await this.storageService.set('user.password', password);
    }

    /**
     * Simply override the user!
     */
    async updateSetUser(user: User): Promise<void> {
        await this.storageService.set('user', user);
    }

    /**
     * Open the profile modal with user details
     */
    async displayEditUserProfile(): Promise<void> {

        const modal = await this.modal.create({
            component: ProfileModalComponent,
            componentProps: { isOpen: true }
        })

        return modal.present();
    }

    /**
     * reset all storage data and return to default state
     */
    async resetApp(): Promise<void> {
        await this.storageService.clear();
        await this.setUserInStorage();
        this.router.navigate(['/start']);
    }

    /**
     * this function really belongs in the auth service but i have left it
     * here for simplicity
     */
    logOut(): void {
        this.storageService.remove('isLoggedIn');
        this.router.navigate(['/start']);
    }
}
