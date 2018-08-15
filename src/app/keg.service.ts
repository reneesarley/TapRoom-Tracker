import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import {SESSION_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Injectable()
export class KegService {

  public data: any = [];

  private kegs = new BehaviorSubject<any>([]);
  keg = this.kegs.asObservable();

  save(keg) {
    
    this.saveInStorage("kegs", this.kegs);
  }

  constructor(@Inject(SESSION_STORAGE) private storage: WebStorageService) { }

  saveInStorage(key, val): void {
    console.log('recieved= key:' + key + 'value:' + val);
    this.storage.set(key, val);
    this.data[key]= this.storage.get(key);
   }

   getFromLocal(key): void {
    console.log('recieved= key:' + key);
    this.data[key]= this.storage.get(key);
    console.log(this.data);
   }

}
