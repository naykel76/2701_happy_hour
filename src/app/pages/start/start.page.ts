import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, RouterLink } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';
import { CHECK_IN_LOG } from 'src/app/data';

@Component({
    selector: 'app-start',
    templateUrl: './start.page.html',
    styleUrls: ['./start.page.scss'],
    standalone: true,
    imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class StartPage implements OnInit {

    constructor(
        private userService: UserService,
        private storageService: StorageService,
        private auth: AuthService,
        private router: Router
    ) { }

    async ngOnInit() {
        try {
            await this.setDefaultUserIfNotExists();
            await this.setCheckInDataIfNotExists();
            await this.redirectToHomeIfRememberAndLoggedIn();
        } catch (error) {
            console.log('there is a problem setting the user data on the start page');
        }
    }

    private async setDefaultUserIfNotExists() {
        if (! await this.userService.getUserFromStorage()) {
            await this.userService.setUserInStorage();
        }
    }

    private async setCheckInDataIfNotExists() {
        if (! await this.storageService.get('checkInLog')) {
            await this.storageService.set('checkInLog', CHECK_IN_LOG);
        }
    }

    private async redirectToHomeIfRememberAndLoggedIn() {
        const remember = await this.auth.getRememberMe()
        if (await this.auth.isLoggedIn() && remember) {
            this.router.navigate(['/home']);
        } else {
            return;
        }
    }
}
