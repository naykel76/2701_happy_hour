import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { StorageService } from './storage.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private storageService: StorageService) { }

    /** -------------------------------------------------------------------
    * Storage getters and setters
    * --------------------------------------------------------------------
    */

    async setLoggedIn(status: boolean): Promise<void> {
        await this.storageService.set('isLoggedIn', status);
    }

    async isLoggedIn(): Promise<boolean> {
        return (await this.storageService.get('isLoggedIn')) ?? false;
    }

    async setRememberMe(status: boolean): Promise<void> {
        await this.storageService.set('rememberMe', status);
    }

    async getRememberMe(): Promise<boolean> {
        return (await this.storageService.get('rememberMe')) ?? false;
    }

    /**
  * get super secure authentication credentials from storage
  */
    async getCredentials(): Promise<{ email: string, password: string }> {
        const user = await this.storageService.get('user');
        return { email: user?.email, password: user?.password };
    }
}
