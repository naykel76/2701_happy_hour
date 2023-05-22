import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { StorageService } from 'src/app/services/storage.service';
import { environment } from 'src/environments/environment';
import { TestingComponent } from 'src/app/components/testing/testing';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    standalone: true,
    imports: [IonicModule, CommonModule, FormsModule, TestingComponent]
})
export class LoginPage implements OnInit {

    email: string;
    password: string;
    message: any;
    env = environment;

    constructor(private router: Router, private storageService: StorageService, private userService: UserService) { }

    ngOnInit() { }

    /**
     * Authenticate user and redirect to home page
     */
    async login(): Promise<void> {

        const auth = await this.userService.getCredentials();

        // Don't judge me, it works :)
        if (this.email && this.password && auth && auth.password === this.password && auth.email === this.email) {
            this.storageService.set('isLoggedIn', true);
            this.router.navigate(['/home'])
        } else {
            this.message = 'The email or password is incorrect.'
        }
    }

    /**
     * Reset the users password
     */
    resetPassword(): void {
        alert('password has been reset to 12345');
    }

    /**
     * quickly set the email and password for development and testing
     */
    async quickSet() {
        this.email = 'billy_mac@gmail.com';
        this.password = '12345';
    }

    async setDefaultUser() {
        await this.userService.setUser();
    }

}
