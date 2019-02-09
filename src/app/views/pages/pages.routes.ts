import {  RouterModule, Routes } from '@angular/router';

// Pages
import { DashboardComponent } from './dashboard/dashboard.component';

const pagesRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },

  // Si la ruta es vacia redirecciona al dashboard
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);