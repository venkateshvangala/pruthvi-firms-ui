import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  
  setTokens(key, value){
    localStorage.setItem(key, value);
  }

  resetTokens(){
    localStorage.clear();
  }
}