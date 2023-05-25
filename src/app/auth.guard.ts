import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard {

    constructor(private router: Router, private auth: AuthService) { }

    async canActivate(): Promise<boolean> {

        if (! await this.auth.isLoggedIn()) {
            this.router.navigate(['/login']);
            return false;
        }

        return true;
    }

}
