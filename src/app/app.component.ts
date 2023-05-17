import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { SplashScreen } from '@capacitor/splash-screen';
import { UserService } from './services/user.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
    standalone: true,
    imports: [IonicModule, CommonModule],
})
export class AppComponent {
    public environmentInjector = inject(EnvironmentInjector);

    constructor(private userService: UserService) { }

    async ngOnInit() {

    }


    // // Hide the splash (you should do this on app launch)
    // await SplashScreen.hide();

    // // Show the splash for an indefinite amount of time:
    // await SplashScreen.show({
    //     autoHide: false,
    // });

    // // Show the splash for two seconds and then automatically hide it:
    // await SplashScreen.show({
    //     showDuration: 2000,
    //     autoHide: true,
    // });
}
