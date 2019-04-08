import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';
import { NgSelectModule } from "@ng-select/ng-select";
import { PopoverModule } from 'ngx-bootstrap/popover';
import { GamePlanComponent } from './game-plan/game-plan.component';
import { HomeComponent } from './home/home.component';
import { HuddleComponent } from './huddle/huddle.component';
import { MainRoutes } from './main.routes';
import { MyPlayBookComponent } from './my-play-book/my-play-book.component';
import { CalenderComponent, SelectboxComponent } from './widgets';



@NgModule({
  imports: [
    NgSelectModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(MainRoutes),
    PopoverModule.forRoot()
  ],
  declarations: [
    HomeComponent,
    MyPlayBookComponent,
    HuddleComponent,
    GamePlanComponent,
    SelectboxComponent,
    CalenderComponent
  ],
  entryComponents: []
})
export class MainModule {}
