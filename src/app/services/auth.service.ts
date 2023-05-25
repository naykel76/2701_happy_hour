import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService implements CanActivate {
    constructor(private userService: UserService, private router: Router) { }

    async canActivate(): Promise<boolean> {
        const isLoggedIn = await this.userService.isLoggedIn();
        if (isLoggedIn) {
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }
}
