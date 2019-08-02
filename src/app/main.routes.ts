import { Routes } from '@angular/router';
import { ReportsComponent } from './reports/reports.component';



export const MainRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },
  {
    path: 'reports',
    component: ReportsComponent
  },
  {
    path: 'dashboard',
    component: ReportsComponent
  }
]