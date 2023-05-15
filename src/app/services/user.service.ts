import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { User } from '../definitions';
import { USER } from '../data/user';

@Injectable({
    providedIn: 'root'
})
export class UserService {

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
        // const user = (await this.storageService.get('user')) || this.user;
        // await this.storageService.set('user', this.user);
    }

}
