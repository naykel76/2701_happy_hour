import { CommonModule } from '@angular/common';
import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { ProfileModalComponent } from '../pages/profile/profile-modal.component';

@Component({
    selector: 'app-tabs',
    templateUrl: 'tabs.page.html',
    standalone: true,
    imports: [IonicModule, CommonModule],
})
export class TabsPage {
    public environmentInjector = inject(EnvironmentInjector);

    showTabs: Boolean;

    constructor(private modal: ModalController,) {
        this.editProfile();
    }

    async editProfile() {

        const modal = await this.modal.create({
            component: ProfileModalComponent,
            componentProps: { isOpen: true }
        })

        return modal.present();
    }

}
