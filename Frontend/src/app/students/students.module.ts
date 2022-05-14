import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentDeleteComponent } from './student-delete/student-delete.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailsComponent } from './student-details/student-details.component';



@NgModule({
  declarations: [
    StudentAddComponent,
    StudentDeleteComponent,
    StudentEditComponent,
    StudentListComponent,
    StudentDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class StudentsModule { }
