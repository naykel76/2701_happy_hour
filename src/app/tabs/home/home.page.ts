import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    standalone: true,
    imports: [IonicModule, RouterLink],
})
export class HomePage {
    constructor() { }
}
