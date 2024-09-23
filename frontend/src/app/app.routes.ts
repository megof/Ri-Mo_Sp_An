import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('@routes/home.routes').then(m => m.routes),
    },
    {
        path: 'users',
        loadChildren: () => import('@routes/user.routes').then(m => m.routes),
    },
    {
        path: 'inventory',
        loadChildren: () => import('@routes/inventory.routes').then(m => m.routes),
    },
    {
        path: 'cards',
        loadChildren: () => import('@routes/cards.routes').then(m => m.routes),
    },
    {
        path: 'login',
        loadChildren: () => import('@routes/login.routes').then(m => m.routes),
    },
    {
        path: 'register',
        loadChildren: () => import('@routes/register.routes').then(m => m.routes),
    }
];