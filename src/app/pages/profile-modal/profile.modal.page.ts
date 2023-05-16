import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController, IonPopover, NavParams } from '@ionic/angular';
import { User } from 'src/app/interface/user';
import { format, parseISO } from 'date-fns';

@Component({
    selector: 'app-profile-modal',
    templateUrl: './profile.modal.page.html',
    standalone: true,
    imports: [IonicModule, CommonModule, FormsModule]
})
export class ProfileModalPage {

    @ViewChild(IonPopover) popover: IonPopover;

    user: User = {
        name: '',
        email: '',
        birthday: '',
        phone: '',
        avatar: ''
    }

    actionSheetButtons = [
        {
            text: 'Take Photo',
            icon: 'camera-outline',
            data: {
                action: 'share'
            }
        },
        {
            text: 'Choose Existing Photo',
            icon: 'image-outline',
            data: {
                action: 'share'
            }
        }
    ];

    constructor(private modal: ModalController) { }

    /**
     * close the modal and set data and role
     */
    save() {
        this.modal.dismiss(this.user, 'saved');
    }

    /**
     * close the modal setting data = null, and role = cancel
     */
    cancel() {
        this.modal.dismiss(null, 'cancel');
    }

    /**
     * set user birthday as human readable string
     */
    setBirthday(value) {

        console.log(value);

        this.user.birthday = format(parseISO(value), 'dd/MM/yyyy');
    }

}
