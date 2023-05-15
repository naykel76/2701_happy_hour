import { CommonModule } from '@angular/common';
import { Component, EnvironmentInjector, inject } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
    selector: 'app-tabs',
    templateUrl: 'tabs.page.html',
    standalone: true,
    imports: [IonicModule, CommonModule],
})
export class TabsPage {
    public environmentInjector = inject(EnvironmentInjector);

    showTabs: Boolean;

    constructor(private router: Router) { }

    /**
     * hide the toolbar on the home page
     */
    showHideToolbar() {

        // alert(this.router.url === '/tabs/home')
        this.showTabs = this.router.url === '/tabs/home' ? false : true;
        // if (this.router.url === '/tabs/home') {
        //     this.showTabs = false;
        // } else {
        //     this.showTabs = true;
        // }
    }
}
