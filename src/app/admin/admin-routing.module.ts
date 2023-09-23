import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentsAttendanceComponent } from './students-attendance/students-attendance.component';
import { TimeTableComponent } from './time-table/time-table.component';
import { AccountManagmentComponent } from './account-managment/account-managment.component';
import { PaymentManagmentComponent } from './payment-managment/payment-managment.component';
import { StudentsListViewComponent } from './account-managment/students-list-view/students-list-view.component';


const routes: Routes = [
  {
    path:"",
    component:AdminComponent,
    children:[  {
      path:"",
      redirectTo:"dashboard",
      pathMatch:"full"
    },
  {
    path:"dashboard",
    component:DashboardComponent
  },{
    path:'student-attendance',
    component:StudentsAttendanceComponent
  },{
    path:'account-managment',
    component:AccountManagmentComponent
  },{
    path:'payment-managment',
    component:PaymentManagmentComponent
  },{
    path:'time-table',
    component:TimeTableComponent
  }]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
