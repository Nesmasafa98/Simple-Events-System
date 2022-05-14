import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterSpeakerComponent } from './register-speaker/register-speaker.component';
import { RegisterStudentComponent } from './register-student/register-student.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent,children:[
    {path:"student", component:RegisterStudentComponent},
    {path:"speaker", component:RegisterSpeakerComponent},
  ]},
  {path:"", redirectTo:"login", pathMatch:"full"},
  // {path:"**", component:},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
