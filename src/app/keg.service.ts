import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';



@Injectable()
export class KegService {

  public data: any = [];

  private kegs = new BehaviorSubject<any>([]);
  keg = this.kegs.asObservable();


  constructor() { }



}
