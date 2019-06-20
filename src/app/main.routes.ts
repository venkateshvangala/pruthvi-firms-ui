import { PulsesComponent } from './pulses/pulses.component';
import { MilletsComponent } from './millets/millets.component';
import { VegetablesComponent } from './vegetables/vegetables.component';
import { RiceComponent } from './rice/rice.component';
import { Routes } from '@angular/router';



export const MainRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'vegitables'
  },
  {
    path: 'rice',
    component: RiceComponent
  },
  {
    path: 'vegitables',
    component: VegetablesComponent
  },
  {
    path: 'millets',
    component: MilletsComponent
  },
  {
    path: 'pulses',
    component: PulsesComponent
  }
]