import { Routes } from '@angular/router';
import { TabsPage } from './tabs/tabs.page';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [

    {
        path: '',
        redirectTo: '/favourite-beers',
        pathMatch: 'full',
    },
    {
        path: 'login',
        loadComponent: () => import('./pages/login/login.page').then(m => m.LoginPage)
    },
    {
        path: 'start',
        loadComponent: () => import('./pages/start/start.page').then(m => m.StartPage)
    },
    {
        path: '',
        component: TabsPage,
        canActivate: [AuthGuard],
        children: [
            {
                path: 'home',
                loadComponent: () =>
                    import('./tabs/home/home.page').then((m) => m.HomePage,),
            },
            {
                path: 'find-mates',
                loadComponent: () => import('./tabs/find-mates/find-mates.page').then(m => m.FindMatesPage)
            },
            {
                path: 'favourite-beers',
                loadComponent: () => import('./tabs/favourite-beers/favourite-beers.page').then(m => m.FavouriteBeersPage)
            },
            {
                path: 'venues',
                loadComponent: () =>
                    import('./tabs/venues/venues.page').then((m) => m.VenuesPage),
            },
            {
                path: '',
                redirectTo: '/tabs/home',
                pathMatch: 'full',
            },
        ],
    },
    {
        path: 'dev',
        loadComponent: () => import('./dev.page').then(m => m.DevPage)
    },




];
