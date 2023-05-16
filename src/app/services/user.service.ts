import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { User } from '../definitions';
import { USER } from '../../data/user';
import { log } from 'console';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    dataUSER: User = {
        name: 'Billy McDoogle',
        email: 'billy_mac@gmail.com',
        password: '12345',
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
        this.setUser()
    }

    async setUser() {
        return USER;
    }

    /**
     * get the password from storage
     */
    async getPassword(): Promise<string> {
        const user = await this.storageService.get('user');
        return user?.password || '';
    }

}
