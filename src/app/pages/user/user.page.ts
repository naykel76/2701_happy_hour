import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController, IonPopover } from '@ionic/angular';
import { User } from 'src/app/interface/user';
import { format, parseISO } from 'date-fns';
import { USER } from 'src/data/user';

@Component({
    selector: 'app-user',
    templateUrl: './user.page.html',
    standalone: true,
    imports: [IonicModule, CommonModule, FormsModule]
})
export class UserPage {

    // ****************************************************************************
    // NK::TD THIS COMPONENT MAY BE OBSOLETE. IT IS NOT CURRENTLY USED BY MAY
    // BE CONSIDERED FOR THE FINAL RELEASE
    // ****************************************************************************

    @ViewChild(IonPopover) popover: IonPopover;

    user = USER;
    // user: User = {
    //     name: 'Billy McDoogle',
    //     email: 'billy_mac@gmail.com',
    //     birthday: '23/09/1996'
    // }

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
     * set user birthday to human readable string
     */
    setBirthday(value) {
        this.user.birthday = format(parseISO(value), 'dd/MM/yyyy');
        // this.popover.dismiss();
    }

    /**
     * close the modal and do nothing
     */
    cancel() {
        this.modal.dismiss(null, 'cancel');
    }

    updateProfile() {
        this.modal.dismiss(null, 'cancel');
    }

    updateAvatar() {
        console.log('change avatar clicked');
    }

}
