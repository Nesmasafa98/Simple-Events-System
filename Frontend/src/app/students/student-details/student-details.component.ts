import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/student.service';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  student:Student = new Student(0,"","","");
  
  constructor(public studentSrv:StudentService, public router:Router, public ar:ActivatedRoute) { }

  ngOnInit(): void {
    this.ar.params.subscribe(param=>{
      this.studentSrv.getStudent(+param["id"]).subscribe(res=>{
        this.student = res;
      })
    })
  }

}
