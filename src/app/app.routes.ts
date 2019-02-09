import {  RouterModule, Routes } from '@angular/router';

// Pages
import { LoginComponent } from './views/app/login/login.component';
import { Error404Component } from './views/app/errors/error404/error404.component';
import { PagesComponent } from './views/pages/pages.component';

const appRoutes: Routes = [
   // Login de la aplicacion
   { path: 'login', component: LoginComponent },

   // Cargando las rutas hijas (lazy load)
   { path: '', component: PagesComponent, loadChildren: './views/pages/pages.module#PagesModule' },

   // Pagina no encontrada
   { path: '**', component: Error404Component }
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes);