import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import * as XLSX from 'xlsx';
import {HttpClient}from '@angular/common/http';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete/ngx-google-places-autocomplete.directive';
import { ComponentRestrictions } from 'ngx-google-places-autocomplete/objects/options/componentRestrictions';

 
@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  employeeForm:FormGroup;
 public selectedValue="blank";
  formsucess=false;
  errormessage:any;
  formatAddress='';
  options={
    componentRestrictions:{
      country:[
        'IN']
  }
}
   
  constructor(private formBuilder:FormBuilder, private http:HttpClient) { }
 
  ngOnInit(): void {
     this.formInit();
    
   
 
  }
  formInit()
  {
    this.employeeForm=this.formBuilder.group({
      name:['',Validators.required],
      employeeid:['',Validators.required],
      workLocation:['Interested',Validators.required],
      date:['2021-04-01',Validators.required],
      joiningDate:['2021-04-01',Validators.required],
      comments:[''],

      preference:[' ',Validators.required],
      currentLocation:['',Validators.required]
    })
  }
  onSelection(selected:any)
 {
   console.log("Selected");
   
   if (selected.target.value === 'workFromHomeForever') {
     console.log("If")
    this.employeeForm.get('comments').setValidators([Validators.required]);
    this.employeeForm.get('comments').updateValueAndValidity();
  }
  else{
    this.employeeForm.get('comments').setValidators(null);
    this.employeeForm.get('comments').updateValueAndValidity();

  }
  this.selectedValue=selected.target.value;
 
 
  
  // if(selected.target.value === 'workFromHomeForever')
  // {
  //   console.log("else")
  //   this.employeeForm.get('comments').setValidators(null);
  // }

  // if(selected.target.value === 'workFromHomeForever')
  // {
  //   this.selectedValue=selected.target.value;
  //   console.log(this.selectedValue)

  // }
 
 
 
 
}
 
    
  public handleAddressChange(address:any) {
  
    this.formatAddress=address.formatted_address;
}

submit()
{
  console.log("Submitted")
  //  console.log(this.employeeForm.value);
  //  this.http.post('http://ec2-3-142-247-40.us-east-2.compute.amazonaws.com:5000/api/employeeresponse',this.employeeForm.value).subscribe((data)=>{console.log(data);
  //  this.formsucess=true;
  //  this.formInit();
  //  this.errormessage=null;
  //  setTimeout(()=>{this.formsucess=false},2000);
  // },err=>{this.errormessage=err;
  //   console.log(err)})

}
}
