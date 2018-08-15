import { Component } from '@angular/core';
import { KegService } from './keg.service';
import { Keg } from  './models/keg.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  kegs: any = [];
  isActive: boolean = false;

  constructor(private _keg: KegService) { }

  keg1= new Keg("IPA", "Breakside", 6, 6.2);
  keg2= new Keg("Pale Ale", "Burnside", 7, 5.2);
  keg3= new Keg("Stout", "Ten Barrel", 7, 5.5);

  keg4= new Keg("Heifenweissen", "Riverdale", 5, 3.2);
  keg5= new Keg("Goose", "Coor's Light", 6, 8.3);
  keg6= new Keg("Bear", "Reindeer", 6, 3.2);

  keg7= new Keg("Pipe", "Reineer", 9, 5.2);
  keg8= new Keg("Quarter", "Mutt", 8, 6.2);
  keg9= new Keg("Smob", "Mop", 8, 6.5);

  ngOnInit() {
    this._keg.keg.subscribe(res => this.kegs = res);
    this.kegs.push(this.keg1);
    this.kegs.push(this.keg2);
    this.kegs.push(this.keg3);

    this.kegs.push(this.keg4);
    this.kegs.push(this.keg5);
    this.kegs.push(this.keg6);

    this.kegs.push(this.keg7);
    this.kegs.push(this.keg8);
    this.kegs.push(this.keg9);
  }


  // activeButton = function() {
  //   this.isActive = !this.isActive;
  // }

  }
