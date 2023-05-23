import { CommonModule } from '@angular/common';
import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-tabs',
    templateUrl: 'tabs.page.html',
    standalone: true,
    imports: [IonicModule, CommonModule],
})
export class TabsPage {

    environmentInjector = inject(EnvironmentInjector);

    constructor(private userService: UserService, private router: Router) { }

    /**
     * guard to prevent tabs displaying on 'home' route
     */
    shouldDisplayTabs(): boolean {
        return this.router.url !== '/home';
    }

    /**
     * Open the user profile modal
     */
    async displayEditUserProfile() {
        await this.userService.displayEditUserProfile();
    }

}
