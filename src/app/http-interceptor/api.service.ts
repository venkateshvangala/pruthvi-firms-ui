import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { URLs } from '../../config/http-end-points';
import { LoaderService } from '../services/loader.service';
import { ApiServiceInterface } from './api-service-interface';
import { InspireModalService } from '../services';

@Injectable({
  providedIn: 'root'
})
export class ApiService implements ApiServiceInterface {

  constructor(public http: HttpClient, private loaderService: LoaderService, public router: Router, public dialogService: InspireModalService) { }
  public baseUrl: any = 'baseURL';
  action: any = null;
  queryParams: any = null;

  get(action: any, queryParams ?: any, enableLoader:any = true): Observable<any> {
    if(enableLoader)
    this.showLoader();
    this.action = action;
    this.queryParams = queryParams;
    
    const urlObject: any = this.getApiInfo(action);
    const url = urlObject ? urlObject.url : null;
    
    if (!url) {
      console.log(`URL not found in App Urls.`);
      return;
    }
    return new Observable( subscriber => {
      this.http.get(`${this.baseUrl}${url}${queryParams ? queryParams : ''}`).subscribe(
        (response: any) => {
          if(enableLoader)
          this.hideLoader();
          subscriber.next(response);
        },
        (error) => {
          subscriber.error(error);
        }
      );
    });
  }

  patch(action: any, payload ?: object, queryParams ?: any, enableLoader = true): Observable<any> {
    if(enableLoader)
    this.showLoader();
    const urlObject: any = this.getApiInfo(action);
    const url = urlObject ? urlObject.url : null;
    if (!url) {
      console.log(`URL not found in App Urls.`);
      return;
    }
    return new Observable( subscriber => {
      this.http.patch(`${this.baseUrl}${url}`, payload).subscribe(
        (response: any) => {
          if(enableLoader)
          this.hideLoader();
          subscriber.next(response);
        },
        (error) => {
          subscriber.error(error);
        }
      );
    });
  }

  post(action: any, payload ?: object, params ?: object, queryParams ?: object, enableLoader = true): Observable<any> {
    if(enableLoader)
    this.showLoader();
    const urlObject: any = this.getApiInfo(action);
    const url = urlObject ? urlObject.url : null;
    if (!url) {
      console.log(`URL not found in App Urls.`);
      return;
    }
    return new Observable( subscriber => {
      this.http.post(`${this.baseUrl}${url}`, payload).subscribe(
        (response: any) => {
          if(enableLoader)
          this.hideLoader();
          subscriber.next(response);
        },
        (error) => {
          subscriber.error(error);
        }
      );
    });
  }

  put(action: any, payload ?: object, params ?: object, queryParams ?: object, enableLoader = true): Observable<any> {
    if(enableLoader)
    this.showLoader();
    const urlObject: any = this.getApiInfo(action);
    const url = urlObject ? urlObject.url : null;
    if (!url) {
      console.log(`URL not found in App Urls.`);
      return;
    }
    return new Observable( subscriber => {
      this.http.put(`${this.baseUrl}${url}`, payload).subscribe(
        (response: any) => {
          if(enableLoader)
          this.hideLoader();
          subscriber.next(response);
        },
        (error) => {
          subscriber.error(error);
        }
      );
    });
  }

  delete(action: any, payload ?: object, params ?: object, queryParams ?: object, enableLoader = true): Observable<any> {
    if(enableLoader)
    this.showLoader();
    const urlObject: any = this.getApiInfo(action);
    const url = urlObject ? urlObject.url : null;
    if (!url) {
      console.log(`URL not found in App Urls.`);
      return;
    }
    return new Observable( subscriber => {
      this.http.delete(`${this.baseUrl}${url}`).subscribe(
        (response:any) => {
          if(enableLoader)
          this.hideLoader();
          subscriber.next(response);
        },
        (error) => {
          subscriber.error(error);
        }
      );
    });
  }

  getApiInfo(action: any): object {
    const keys = action.split('.');
    let temp: object = URLs;
    let isUrlFound: any = true;
    for (const key of keys) {
      if (temp[key]) 
      temp = temp[key];
      else
      isUrlFound = false;
    }
    if(isUrlFound && temp['url'] != null)
    return temp;
    return null;
  }

  private showLoader(): void {
    this.loaderService.showLoader();
  }
  private hideLoader(): void {
    setTimeout( () => {
      this.loaderService.hideLoader();
    }, 100);
  }
}
