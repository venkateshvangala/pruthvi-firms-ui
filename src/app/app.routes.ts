import { Routes } from '@angular/router';
import { LoginComponent } from './authentication/login.component';
import { AuthGaurd } from './gaurds';
import { MainComponent } from './main.component';

export const ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'main'
  },
  {
    path: 'login',
    redirectTo: 'main'
    // component: LoginComponent
  },
  {
    path: 'main',
    canActivate: [AuthGaurd],
    component: MainComponent,
    loadChildren: './main.module#MainModule'
  },
  { path: '**', redirectTo: '' }
]
