import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentsAttendanceComponent } from './students-attendance/students-attendance.component';
import { StudentsFeeComponent } from './students-fee/students-fee.component';
import { StudentsListViewComponent } from './students-list-view/students-list-view.component';
import { TeachersListComponent } from './teachers-list/teachers-list.component';
import { TeachersPaymentComponent } from './teachers-payment/teachers-payment.component';
import { TimeTableComponent } from './time-table/time-table.component';


@NgModule({
  declarations: [
    AdminComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    StudentsAttendanceComponent,
    StudentsFeeComponent,
    StudentsListViewComponent,
    TeachersListComponent,
    TeachersPaymentComponent,
    TimeTableComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
