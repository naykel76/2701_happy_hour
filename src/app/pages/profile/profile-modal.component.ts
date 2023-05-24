import { Component, ViewChild, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, ModalController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { User } from 'src/app/definitions';
import { UserService } from 'src/app/services/user.service';
import { format, parseISO } from 'date-fns';
import { Camera, CameraResultType } from '@capacitor/camera';
import { CameraSource } from '@capacitor/camera/dist/esm/definitions';

@Component({
    selector: 'app-profile-modal',
    templateUrl: './profile-modal.component.html',
    imports: [IonicModule, CommonModule, FormsModule],
    standalone: true
})
export class ProfileModalComponent implements OnInit {

    // @ViewChild(IonPopover) popover: IonPopover;
    showNotifications: boolean;
    imageSource: any;

    // NK?? need to declare each property or I get a ctx error. Why?
    user: User = {
        name: '',
        email: '',
        password: '',
        birthday: '',
        phone: '',
        avatar: ''
    }

    constructor(private modal: ModalController, private userService: UserService) { }

    async ngOnInit() {
        this.user = await this.userService.getUserFromStorage();
    }

    /**
     * save the user to storage and close the modal
     */
    save() {
        this.userService.updateSetUser(this.user);
        this.modal.dismiss(null, 'saved');
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
        this.user.birthday = format(parseISO(value), 'dd/MM/yyyy');
    }


    takePicture = async () => {
        const image = await Camera.getPhoto({
            quality: 90,
            allowEditing: false,
            resultType: CameraResultType.Uri,
            // resultType: CameraResultType.DataUrl,
            source: CameraSource.Prompt,
            saveToGallery: true
        });

        Camera.getPhoto
        this.imageSource = image.dataUrl;

        console.log(this.imageSource);

    }

    logout() {
        this.userService.logOut();
    }
}
