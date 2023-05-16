import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    standalone: true,
    imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginPage implements OnInit {


    // email: string = 'billy_mac@gmail.com';
    // password: string = 'wrong';

    email: string;
    password: string;

    test: any;
    message: any;

    constructor(private router: Router, private userService: UserService) { }

    ngOnInit() { }

    /**
     * Authenticate user and redirect to home page
     */
    async login(): Promise<void> {
        const password = await this.userService.getPassword();

        if (password === this.password) {
            this.router.navigate(['/tabs/home'])
        } else {
            this.message = 'The email or password is incorrect.'
        }
    }

    /**
     * Reset the users password
     * NK?? Does ionic or angular have API to manage this?
     */
    resetPassword(): void {
        alert('reset password');
    }

}
