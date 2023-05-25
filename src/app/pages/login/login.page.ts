import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';
import { TestingComponent } from 'src/app/components/testing/testing';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    standalone: true,
    imports: [IonicModule, CommonModule, FormsModule, TestingComponent]
})
export class LoginPage {

    email: string;
    password: string;
    remember: boolean = false;
    message: any;
    env = environment;

    constructor(private router: Router, private authService: AuthService, private userService: UserService) { }

    /**
     * Authenticate user and redirect to home page
     */
    async login(): Promise<void> {

        const auth = await this.authService.getCredentials();

        // Don't judge me, it works :)
        if (this.email && this.password && auth && auth.password === this.password && auth.email === this.email) {
            this.authService.setLoggedIn(true);
            this.setRememberMeStatus();
            this.resetClassParameters();
            this.router.navigate(['/home'])
        } else {
            this.message = 'The email or password is incorrect.'
        }
    }

    private setRememberMeStatus(): void {
        this.remember
            ? this.authService.setRememberMe(true)
            : this.authService.setRememberMe(false);
    }

    private resetClassParameters(): void {
        this.email = '';
        this.message = '';
        this.password = '';
        this.remember = false;
    }

    resetPassword(): void {
        alert('password has been reset to 12345');
    }

    /**
     * quickly set the email and password for development and testing
     */
    async quickSet(): Promise<void> {
        this.resetClassParameters();
        this.email = 'billy_mac@gmail.com';
        this.password = '12345';
    }

}
