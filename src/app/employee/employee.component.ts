import { Component, Input, Output, EventEmitter, OnInit, Inject} from '@angular/core';
import { KegService } from '../keg.service';
import { Keg } from  '../models/keg.model';
import {NgForm} from '@angular/forms';
import {SESSION_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit {

  @Output() clickSender = new EventEmitter();

  kegs = [];

  selectedKeg = null

  constructor(private _keg: KegService, @Inject(SESSION_STORAGE) private storage: WebStorageService) { }

  ngOnInit() {
    this._keg.keg.subscribe(res => this.kegs = res);

  }

  editButtonClicked(kegToUpdate: Keg) {
    if (kegToUpdate != undefined) {
      this.selectedKeg = kegToUpdate;
      this.clickSender.emit(this.selectedKeg);
    }
    else {
      this.selectedKeg = new Keg('', '', 0, 0, false);

    }
    console.log(this.selectedKeg);
  }

  sellABeer(keg){
    keg.pints --;
    this.saveInStorage();
    this.getFromStorage(); // dont look at this
  }

  saveInStorage(): void {
    console.log("shoving");
    this.storage.set("tap-rndn-key", JSON.stringify(this.kegs));
  }

  getFromStorage(): void {
    console.log("tugging");
    this.kegs = JSON.parse(this.storage.get("tap-rndn-key"));
  }

  onSubmit(f: NgForm) {
    let target: string = f.value.sortBy;
    if ( 1 == 1 ) {
      this.kegs.sort(function(a, b) {
        if (f.value.order == 'descending') {
          let temp = a;
          a = b;
          b = temp;
        }
        if (a[target] > b[target]) {
          return 1;
        }
        if (a[target] < b[target]) {
          return -1;
        }
        return 0;
      });
    }
  }

  deleteKeg(keg){
    let kegIndex = this.kegs.indexOf(keg);
    this.kegs.splice(kegIndex, 1);
  }

  finishedEditingOri(){
    this.selectedKeg = null;
  }

  finishedAddingOri(){
    this.kegs.push(this.selectedKeg);
    this.selectedKeg = null;
  }

  kegStatus(currentKeg) {
  if (currentKeg.pints > 100) {
    return "full";
  } else if (currentKeg.pints >= 62){
    return "half"
  } else {
    return "low"
  }

}


}
