import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { StorageService } from './services/storage.service';

@Component({
    selector: 'app-dev',
    templateUrl: './dev.page.html',
    standalone: true,
    imports: [IonicModule, CommonModule]
})
export class DevPage {

    @ViewChild(IonModal) modal: IonModal;

    message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
    name: string;

    storage: any;

    constructor(private storageService: StorageService) { }

    cancel() {
        this.modal.dismiss(null, 'cancel');
    }

    confirm() {
        this.modal.dismiss(this.name, 'confirm');
    }

    onWillDismiss(event: Event) {
        const ev = event as CustomEvent<OverlayEventDetail<string>>;
        if (ev.detail.role === 'confirm') {
            this.message = `Hello, ${ev.detail.data}!`;
        }
    }


    clearStorage() {
        this.storageService.clear();
    }

}
