import { Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { KegService } from '../keg.service';
import { Keg } from  '../models/keg.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit {

  @Output() clickSender = new EventEmitter();

  kegs: any = [];

  selectedKeg = null

  constructor(private _keg: KegService) { }

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
