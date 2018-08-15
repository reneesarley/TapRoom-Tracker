import { Component, OnInit } from '@angular/core';
import { KegService } from '../keg.service';
import { Keg } from  '../models/keg.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  kegs: any = [];

  constructor(private _keg: KegService) { }

  ngOnInit() {
    this._keg.keg.subscribe(res => this.kegs = res);
  }

}
