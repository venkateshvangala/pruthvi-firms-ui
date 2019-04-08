import { LoginComponent } from './authentication/login.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { AppComponent } from './app.component';
import { HttpInterceptorModule } from './http-interceptor/http-interceptor.module';
import { ROUTES } from './app.routes';
import { MainComponent } from './main.component';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { LoaderComponent, HeaderComponent, MenuComponent } from './widgets';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [
    LoginComponent,
    AppComponent,
    MainComponent,
    LoaderComponent,
    HeaderComponent, 
    MenuComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    NgSelectModule,
    CommonModule,
    ReactiveFormsModule,
    HttpInterceptorModule,
    HttpClientModule,
    PopoverModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forRoot(ROUTES, { useHash: true })
  ],
  providers: [],
})
export class AppModule { }
