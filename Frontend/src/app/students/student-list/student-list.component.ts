import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student.service';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students:Student[] = [];
  constructor(public studentSrv:StudentService) { }

  ngOnInit(): void {
    this.studentSrv.getStudents().subscribe(res=>{
      this.students = res;
    });
  }

}
