import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private loaderSubject = new Subject<LoaderState>();
  public loaderState = this.loaderSubject.asObservable();

  hideLoader() {
    this.loaderSubject.next(<LoaderState>{ show: false });
  }

  showLoader() {
    this.loaderSubject.next(<LoaderState>{ show: true });
  }

}

export interface LoaderState {
  show: boolean;
}

