import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpIntercptorService } from './http-interceptor.service';

@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpIntercptorService,
      multi: true
    }
  ]
})
export class HttpInterceptorModule {
}
