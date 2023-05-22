import { Component, ViewChild, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, ModalController } from '@ionic/angular';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
// import { StorageService } from './services/storage.service';
// import { User } from './definitions';
import { FormsModule } from '@angular/forms';
import { User } from 'src/app/definitions';
import { UserService } from 'src/app/services/user.service';
// import { AuthGuard } from './auth.guard';
// import { UserService } from './services/user.service';

@Component({
    selector: 'app-profile-modal',
    templateUrl: './profile-modal.component.html',
    imports: [IonicModule, CommonModule, FormsModule],
    standalone: true
})
export class ProfileModalComponent implements OnInit {

    // @ViewChild(IonPopover) popover: IonPopover;
    showNotifications: boolean;

    user: User = {
        name: 'Billy McDoogle',
        email: 'billy_mac@gmail.com',
        password: '12345',
        birthday: '23/09/1996',
        phone: '0404 0505 0909',
        avatar: 'avatar.png'
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

    constructor(private modal: ModalController, private userService: UserService) { }

    ngOnInit() { }

    /**
     * close the modal and set data and role
     */
    save() {
        // this.modal.dismiss(this.user, 'saved');
        // update storage?
    }

    /**
     * close the modal setting data = null, and role = cancel
     */
    cancel() {
        this.modal.dismiss(null, 'cancel');
    }

    logout() {
        this.userService.logOut();
    }

    // /**
    //  * set user birthday as human readable string
    //  */
    // setBirthday(value) {

    //     console.log(value);

    //     this.user.birthday = format(parseISO(value), 'dd/MM/yyyy');
    // }

}
