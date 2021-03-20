import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import * as XLSX from 'xlsx';
import {HttpClient}from '@angular/common/http';
 
@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  employeeForm:FormGroup;
  notInterested=true;
  formsucess=false;
  errormessage:any;
  
 
   
  constructor(private formBuilder:FormBuilder, private http:HttpClient) { }
 
  ngOnInit(): void {
     this.formInit();
    
   
 
  }
  formInit()
  {
    this.employeeForm=this.formBuilder.group({
      name:['',Validators.required],
      email:[''],
      employeeid:['',Validators.required],
      status:['Interested',Validators.required],
      date:['2021-04-01',Validators.required],
      dateSelected:['2021-04-01',Validators.required],
      reason:['']
    })
  }
  onSelection()
 
  {
    console.log("called")
    if(this.notInterested==false)
    {
    this.notInterested=true;
    }
    else{
      this.notInterested=false;
 
    }
    // this.notInterested=true;
 
  }
 
  onSubmit()
  {
    
     console.log(this.employeeForm.value);
     this.http.post('http://employeeserviceapp-env.eba-pvfsnwfm.us-east-2.elasticbeanstalk.com//api/employeeresponse',this.employeeForm.value).subscribe((data)=>{console.log(data);
     this.formsucess=true;
     this.formInit();
     this.errormessage=null;
     setTimeout(()=>{this.formsucess=false},2000);
    },err=>{this.errormessage=err;
      console.log(err)})

  }
 
 
 
}
