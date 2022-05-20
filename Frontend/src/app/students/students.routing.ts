import { NgModule } from "@angular/core";
import {  RouterModule, Routes } from "@angular/router";
import { StudentDeleteComponent } from "./student-delete/student-delete.component";
import { StudentDetailsComponent } from "./student-details/student-details.component";
import { StudentEditComponent } from "./student-edit/student-edit.component";
import { StudentListComponent } from "./student-list/student-list.component";



const routes:Routes = [
    {path:"",component:StudentListComponent},
    {path:"details/:id",component:StudentDetailsComponent},
    {path:"delete/:id",component:StudentDeleteComponent},
    {path:"edit/:id",component:StudentEditComponent},
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class StudentsRoutingModule{}