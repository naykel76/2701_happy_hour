import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, ModalController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { User } from 'src/app/definitions';
import { UserService } from 'src/app/services/user.service';
import { format, parseISO } from 'date-fns';
import { PhotoService } from 'src/app/services/photo.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-profile-modal',
    templateUrl: './profile-modal.component.html',
    imports: [IonicModule, CommonModule, FormsModule],
    standalone: true
})
export class ProfileModalComponent implements OnInit {

    // NK?? need to declare each property or I get a ctx error. Why?
    user: User = {
        name: '',
        email: '',
        password: '',
        birthday: '',
        phone: '',
        avatar: ''
    }

    constructor(
        private modal: ModalController,
        private userService: UserService,
        public photoService: PhotoService,
    ) { }

    async ngOnInit() {
        this.user = await this.userService.getUserFromStorage();
        await this.photoService.loadSaved();
    }

    /**
     * close the modal
     */
    back() {
        this.userService.updateSetUser(this.user);
        this.modal.dismiss(null, 'cancel');
    }

    /**
     *  reset app with default state
     */
    async resetApp(): Promise<void> {
        await this.userService.resetApp();
        this.modal.dismiss(null, 'cancel');
    }

    /**
     * set user birthday as human readable string
     */
    setBirthday(value) {
        this.user.birthday = format(parseISO(value), 'dd/MM/yyyy');
    }


    takeProfilePhoto() {
        this.photoService.takePhoto();
    }

    // NK::TD move to user service
    logout() {
        this.userService.logOut();
        this.modal.dismiss(null, 'cancel');
    }
}
