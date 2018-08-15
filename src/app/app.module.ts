import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule }  from '@angular/forms';
import { StorageServiceModule } from 'angular-webstorage-service';

import { KegService } from './keg.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PatronComponent } from './patron/patron.component';
import { EmployeeComponent } from './employee/employee.component';
import { UpdateKegComponent } from './update-keg/update-keg.component';
import { AddKegComponent } from './add-keg/add-keg.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PatronComponent,
    EmployeeComponent,
    UpdateKegComponent,
    AddKegComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StorageServiceModule
  ],
  providers: [KegService],
  bootstrap: [AppComponent]
})
export class AppModule { }
