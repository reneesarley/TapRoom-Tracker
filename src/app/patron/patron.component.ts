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

  keg1= new Keg("IPA", "Breakside", 6, 6.2);

  ngOnInit() {
    this._keg.keg.subscribe(res => this.kegs = res);
    this.kegs.push(this.keg1);
  }






}
