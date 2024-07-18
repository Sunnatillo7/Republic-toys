import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent),
    },
    {
        path: 'showroom',
        loadComponent: () => import('./pages/showroom/showroom.component').then(c => c.ShowroomComponent),

    },
    {
        path: 'contact',
        loadComponent: () => import('./pages/contacts/contacts.component').then(c => c.ContactsComponent)
    },
    {
        path: 'document-b2b',
        loadComponent: () => import('./pages/documents-b2b/documents-b2b.component').then(c => c.DocumentsB2bComponent)
    },
    {
        path: 'about-us',
        loadComponent: () => import('./pages/about-us/about-us.component').then(c => c.AboutUsComponent)
    },
    {
        path: 'toys',
        loadComponent: () => import('./pages/toys/toys.component').then(c => c.ToysComponent),
        pathMatch: 'full',
    },
    {
        path: 'single-toy/:id',
        loadComponent: () => import('./pages/single-toy/single-toy.component').then(c => c.SingleToyComponent),
    }


];
