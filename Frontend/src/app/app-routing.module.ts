import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventListComponent } from './events/event-list/event-list.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterSpeakerComponent } from './register-speaker/register-speaker.component';
import { RegisterStudentComponent } from './register-student/register-student.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:"register/student", component:RegisterStudentComponent},
  {path:"register/speaker", component:RegisterSpeakerComponent},
  {path:"home", loadChildren: ()=> import("src/app/users/admin/admin.module").then(m=>m.AdminModule)},
  {path:"events", component:EventListComponent},
  {path:"", redirectTo:"login", pathMatch:"full"},
  {path:"**", component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
