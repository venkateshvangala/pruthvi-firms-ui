import { HomeComponent } from './../home/home.component';
import { Router } from '@angular/router';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ApiService } from './api.service';


export class HttpIntercptorService extends ApiService implements HttpInterceptor {

 

  setAuthorizations(req: HttpRequest<any>) {
    return req.clone({
      setHeaders: {
        Authorization: decodeURI(localStorage.getItem('id_token'))
      }
    });
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>  {
    return next.handle(this.setAuthorizations(req)).pipe(
      tap(
        () => {},
        (error: any) => {
          console.group(`Http Request Failure.`);
          console.error(`error code: ${error.status}`);
          console.error(`error message: ${error.message}`);
          console.error(`Failure URL: ${error.url}`);
          console.groupEnd();
        }


      )
    );
  }
}
