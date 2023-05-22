import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard {

    constructor(private router: Router, private userService: UserService) { }

    async canActivate(): Promise<boolean> {

        if (! await this.userService.isLoggedIn()) {
            this.router.navigate(['/login']);
            return false;
        }

        return true;
    }

}
