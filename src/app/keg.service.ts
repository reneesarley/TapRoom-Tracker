import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class KegService {

  private kegs = new BehaviorSubject<any>([]);
  keg = this.kegs.asObservable();

  save(keg) {
    this.kegs.next(keg);
  }



}
