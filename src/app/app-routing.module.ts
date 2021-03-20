import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';

const routes: Routes = [
  {
    path:"employeeForm",
    component:EmployeeFormComponent,
  },
  {
    path:"admin",
    component:AdminPageComponent
  },
  {
    path:"",
    redirectTo:"/employeeForm",
    pathMatch:"full"
  },
  {
    path:"**",
    redirectTo:"/employeeForm"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
