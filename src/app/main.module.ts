import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';
import { NgSelectModule } from "@ng-select/ng-select";
import { PopoverModule } from 'ngx-bootstrap/popover';
import { MainRoutes } from './main.routes';
import { ReportsComponent } from './reports/reports.component';
import { SelectboxComponent } from './widgets';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';




@NgModule({
  imports: [
    NgSelectModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(MainRoutes),
    PopoverModule.forRoot(),
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot()
  ],
  declarations: [
    SelectboxComponent,
    ReportsComponent
  ],
  entryComponents: []
})
export class MainModule {}
