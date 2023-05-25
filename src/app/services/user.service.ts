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

    async setUserInStorage(): Promise<void> {
        await this.storageService.set('user', USER);
    }

    async getUserFromStorage(): Promise<User> {
        return await this.storageService.get('user');
    }

    /**
     * Simply override the user!
     */
    async updateSetUser(user: User): Promise<void> {
        await this.storageService.set('user', user);
    }

    /**
     * set the password from storage
     */
    async setPassword(password: any) {
        await this.storageService.set('user.password', password);
    }

    /**
     * get super secure authentication credentials from storage
     */
    async getCredentials(): Promise<{ email: string, password: string }> {
        const user = await this.storageService.get('user');
        return { email: user?.email, password: user?.password };
    }

    async displayEditUserProfile() {

        const modal = await this.modal.create({
            component: ProfileModalComponent,
            componentProps: { isOpen: true }
        })

        return modal.present();
    }

    // NK::TD add this to login
    async rememberMe(): Promise<boolean> {
        return (await this.storageService.get('rememberMe')) ?? false;
    }


    // reset all storage data and return to default state
    // NK:TD clear files???
    reset(){
        this.setUserInStorage()
    }
    /**
     * ------------------------------------------------------------------
     * AUTH
     * ------------------------------------------------------------------
     * These functions would typically be in an auth service but they are
     * created here for simplicity
     */

    async isLoggedIn(): Promise<boolean> {
        return (await this.storageService.get('isLoggedIn')) ?? false;
    }

    logOut() {
        this.storageService.remove('isLoggedIn');
        this.router.navigate(['/start']);
    }
}
