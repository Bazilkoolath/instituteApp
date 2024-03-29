import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { AuthComponent } from './auth.component';

const routes: Routes = [
  {
    path:"",
    component:AuthComponent,
    children:[  {
      path:"",
      redirectTo:"login",
      pathMatch:"full"
    },
  {
    path:"login",
    component:LoginComponent
  },{
    path:'sign-up',
    component:StudentRegistrationComponent
  }]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
