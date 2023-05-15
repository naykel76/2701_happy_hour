import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { StorageService } from './services/storage.service';
import { User } from './definitions';

@Component({
    selector: 'app-dev',
    templateUrl: './dev.page.html',
    standalone: true,
    imports: [IonicModule, CommonModule, FormsModule]
})
export class DevPage implements OnInit {

    user: User = {
        name: '',
        email: '',
        password: '',
        birthday: '',
        phone: '',
        avatar: '',
    };

    constructor(private storageService: StorageService) { }

    async ngOnInit() {
        this.user = await this.storageService.get('user');
        console.log(this.user);
    }


}
