import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  employeeForm:FormGroup;
  notInterested=true;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.employeeForm=this.formBuilder.group({
      name:['',Validators.required],
      employeeId:['',Validators.required],
      status:['Interested',Validators.required],
      date:['2021-04-01',Validators.required]
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
     console.log("submitted")
  }

}
