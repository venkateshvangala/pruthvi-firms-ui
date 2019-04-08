import { HuddleComponent } from './huddle/huddle.component';
import { MyPlayBookComponent } from './my-play-book/my-play-book.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GamePlanComponent } from './game-plan/game-plan.component';


export const MainRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'rice'
  },
  {
    path: 'rice',
    component: HomeComponent
  },
  {
    path: 'vegitables',
    component: MyPlayBookComponent
  },
  {
    path: 'millets',
    component: GamePlanComponent
  },
  {
    path: 'pulses',
    component: HuddleComponent
  }
]