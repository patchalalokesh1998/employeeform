import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';    
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
 

@NgModule({
  declarations: [
    AppComponent,
    EmployeeFormComponent,
    AdminPageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    GooglePlaceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
