import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentDeleteComponent } from './student-delete/student-delete.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentsRoutingModule } from './students.routing';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    StudentDeleteComponent,
    StudentEditComponent,
    StudentListComponent,
    StudentDetailsComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    FormsModule
  ]
})
export class StudentsModule { }
