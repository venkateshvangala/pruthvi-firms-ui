import { CartComponent } from './cart/cart.component';
import { PulsesComponent } from './pulses/pulses.component';
import { MilletsComponent } from './millets/millets.component';
import { VegetablesComponent } from './vegetables/vegetables.component';
import { RiceComponent } from './rice/rice.component';
import { Routes } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';



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
  }, 
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  }
]