import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, RouterLink } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'app-start',
    templateUrl: './start.page.html',
    styleUrls: ['./start.page.scss'],
    standalone: true,
    imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class StartPage implements OnInit {

    constructor(private userService: UserService, private router: Router) { }

    async ngOnInit() {
        try {
            await this.setDefaultUserIfNotExists();
            await this.redirectToHomeIfLoggedIn();
        } catch (error) {
            console.log('there is a problem setting the user data on the start page');
        }
    }

    private async setDefaultUserIfNotExists() {
        if (! await this.userService.getUserFromStorage()) {
            await this.userService.setUserInStorage();
        }
    }

    private async redirectToHomeIfLoggedIn() {
        if (await this.userService.isLoggedIn() && this.userService.rememberMe()) {
            this.router.navigate(['/home']);
        } else {
            return;
        }
    }
}
