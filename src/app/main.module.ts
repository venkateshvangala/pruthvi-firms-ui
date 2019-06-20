import { TileComponent } from './widgets/tile/tile.component';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';
import { NgSelectModule } from "@ng-select/ng-select";
import { PopoverModule } from 'ngx-bootstrap/popover';
import { MainRoutes } from './main.routes';
import { MilletsComponent } from './millets/millets.component';
import { PulsesComponent } from './pulses/pulses.component';
import { RiceComponent } from './rice/rice.component';
import { VegetablesComponent } from './vegetables/vegetables.component';
import { SelectboxComponent } from './widgets';



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
    RiceComponent,
    MilletsComponent,
    VegetablesComponent,
    PulsesComponent,
    SelectboxComponent,
    TileComponent
  ],
  entryComponents: []
})
export class MainModule {}
