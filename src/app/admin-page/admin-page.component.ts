import { Component, OnInit } from '@angular/core';
import {HttpClient}from '@angular/common/http';
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

   tabledata:any;
  filename:string="employee_form_sheet.xlsx";
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://employeeserviceapp-env.eba-pvfsnwfm.us-east-2.elasticbeanstalk.com//api/employeeresponses')
    .subscribe(data=>{
      console.log(data);
      this.tabledata=data;
    })
  }
  exportToExcel()
  {
    
    let element = document.getElementById('excel-table');
    console.log('insideexport');
    
    console.log(this.tabledata);
    
    if( element !== null) {
      const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
      const wb: XLSX.WorkBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
      XLSX.writeFile(wb,this.filename);
    };
 
  }

}
