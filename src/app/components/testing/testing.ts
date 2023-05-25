import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { StorageService } from 'src/app/services/storage.service';
import { environment } from 'src/environments/environment';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/definitions';

@Component({
    selector: 'nk-testing',
    template: `
        <ion-card color="dark" *ngIf="env.testing" class="maxw-400 mx-auto">
            <ion-card-content>
                <ion-button (click)="clearStorage()" fill="clear" color="warning" expand="full"> Clear Storage </ion-button>
                <small><pre>{{ data | json }}</pre></small>
            </ion-card-content>
        </ion-card>
    `,
    standalone: true,
    imports: [IonicModule, CommonModule]
})
export class TestingComponent implements OnInit {

    @Input() storageKey?: string;

    env = environment;
    data: any;

    constructor(private storageService: StorageService, private userService: UserService) { }

    async ngOnInit() {
        this.refresh()
    }

    clearStorage() {
        this.storageService.clear()
        this.refresh()
    }


    private async refresh() {
        this.data = await this.storageService.get(this.storageKey);
    }

}
