import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentsAttendanceComponent } from './students-attendance/students-attendance.component';
import { StudentsFeeComponent } from './payment-managment/students-fee/students-fee.component';
import { TeachersListComponent } from './account-managment/teachers-list/teachers-list.component';
import { TimeTableComponent } from './time-table/time-table.component';
import { AccountManagmentComponent } from './account-managment/account-managment.component';
import { PaymentManagmentComponent } from './payment-managment/payment-managment.component';



@NgModule({
  declarations: [
    AdminComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    StudentsAttendanceComponent,
    StudentsFeeComponent,
    AccountManagmentComponent,
    TeachersListComponent,
    PaymentManagmentComponent,
    TimeTableComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
