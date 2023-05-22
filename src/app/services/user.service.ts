import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { User } from '../definitions';
import { USER } from '../data';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    user: User;

    constructor(private storageService: StorageService, private router: Router) {
        this.init();
    }

    async init() {
        this.user = USER;
    }

    /**
     * set the user details to storage
     */
    async setUser() {
        await this.storageService.set('user', this.user);
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
        this.router.navigate(['/login']);
        this.storageService.remove('isLoggedIn');
    }
}
