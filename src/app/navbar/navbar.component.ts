import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  show() {
    console.log(this.router.url);
  }

  checkNavStatus(){
    if(this.router.url == '/'){
      document.getElementById("patron").classList.add("active");
      document.getElementById("employee").classList.remove("active");
    } else if(this.router.url == '/employee'){
      document.getElementById("employee").classList.add("active");
      document.getElementById("patron").classList.remove("active");
    }
  }
}
