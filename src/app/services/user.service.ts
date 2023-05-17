import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { User } from '../definitions';
import { USER } from '../../data/user';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    otherUser: User = {
        name: 'Sam',
        email: 'sam@gmail.com',
        password: '67123',
        birthday: '23/09/1996',
        phone: '0404 0505 0909',
        avatar: 'avatar.png'
    };

    user: User;

    constructor(private storageService: StorageService) {
        this.init();
    }

    async init() {
        this.user = USER;
    }

    /**
     * set the user details to storage
     */
    async setUser() {

        const user = (await this.storageService.get('user')) || this.user;
        // only set when not exists
        // const user = (await this.storageService.get('user')) || this.user;
        console.log(user);
    }

    /**
     * set the password from storage
     */
    async setPassword(password: any = '12345') {
        await this.storageService.set('user.password', password);
    }

    /**
     * get the password from storage
     */
    async getPassword(): Promise<string> {
        const user = await this.storageService.get('user');
        return user?.password || '';
    }

    /**
     *
     */
    authenticated():boolean {
        return true;
    }
}
