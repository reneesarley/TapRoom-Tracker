import { Component, OnInit } from '@angular/core';
import { KegService } from '../keg.service';
import { Keg } from  '../models/keg.model';

@Component({
  selector: 'app-patron',
  templateUrl: './patron.component.html',
  styleUrls: ['./patron.component.css']
})
export class PatronComponent implements OnInit {

  kegs: any = [];

  constructor(private _keg: KegService) { }

  ngOnInit() {
    this._keg.keg.subscribe(res => this.kegs = res);
  }






}
