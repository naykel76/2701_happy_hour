import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    standalone: true,
    imports: [IonicModule, RouterLink],
})
export class HomePage {

    constructor(private userService: UserService) {
this.userService.displayEditUserProfile();}

    /**
     * Open the user profile modal
     */
    async displayEditUserProfile() {
        await this.userService.displayEditUserProfile();
    }
}
