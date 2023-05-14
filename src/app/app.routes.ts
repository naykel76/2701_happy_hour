import { Routes } from '@angular/router';
import { TabsPage } from './tabs/tabs.page';

export const routes: Routes = [

    {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full',
    },
    // {
    //     path: 'login',
    //     loadComponent: () => import('./pages/login/login.page').then(m => m.LoginPage)
    // },
    // {
    //     path: 'splash',
    //     loadComponent: () => import('./pages/splash/splash.page').then(m => m.SplashPage)
    // },
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'home',
                loadComponent: () =>
                    import('./tabs/home/home.page').then((m) => m.HomePage),
            },
            {
                path: 'find-mates',
                loadComponent: () => import('./tabs/find-mates/find-mates.page').then(m => m.FindMatesPage)
            },
            {
                path: 'my-beers',
                loadComponent: () =>
                    import('./tabs/my-beers/my-beers.page').then((m) => m.MyBeersPage),
            },
            // {
            //     path: 'venue-list',
            //     loadComponent: () =>
            //         import('./tabs/venue-list/venue-list.page').then((m) => m.VenueListPage),
            // },
            // {
            //     path: 'profile',
            //     loadComponent: () => import('./tabs/profile/profile.page').then(m => m.ProfilePage)
            // },
            {
                path: '',
                redirectTo: '/tabs/home',
                pathMatch: 'full',
            },
        ],
    },
    //   {
    //     path: 'dev',
    //     loadComponent: () => import('./dev.page').then( m => m.DevPage)
    //   },

];
