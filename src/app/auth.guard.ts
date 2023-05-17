import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard {

    isLoggedIn: boolean = true;

    constructor(private router: Router) { }

    canActivate(): boolean {
        if (!this.isLoggedIn) {
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    }

}
