import { Observable } from "rxjs";

export interface ApiServiceInterface {
  get(action: any, payload ?: object, params ?: object, queryParams ?: object): Observable<any>;

  patch(action: any, payload ?: object, queryParams ?: any): Observable<any>;

  post(action: any, payload ?: object, params ?: object, queryParams ?: object): Observable<any>;

  put(action: any, payload ?: object, params ?: object, queryParams ?: object): Observable<any>;

  delete(action: any, payload ?: object, params ?: object, queryParams ?: object): Observable<any>;
}