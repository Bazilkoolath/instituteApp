import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentsAttendanceComponent } from './students-attendance/students-attendance.component';
import { StudentsFeeComponent } from './students-fee/students-fee.component';
import { StudentsListViewComponent } from './students-list-view/students-list-view.component';
import { TeachersListComponent } from './teachers-list/teachers-list.component';
import { TeachersPaymentComponent } from './teachers-payment/teachers-payment.component';
import { TimeTableComponent } from './time-table/time-table.component';

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
    path:'student-fee',
    component:StudentsFeeComponent
  },{
    path:'student-list',
    component:StudentsListViewComponent
  },{
    path:'teacher-list',
    component:TeachersListComponent
  },{
    path:'teacher-payment',
    component:TeachersPaymentComponent
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
