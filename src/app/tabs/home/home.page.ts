import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CheckInService } from 'src/app/services/check-in.service';
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    standalone: true,
    imports: [IonicModule, RouterLink],
})
export class HomePage {

    constructor(private userService: UserService, private cis:CheckInService) { }

    // select venue
    // check in
    // check out


    /**
     * Open the user profile modal
     */
    async displayEditUserProfile() {
        await this.userService.displayEditUserProfile();
    }
}
