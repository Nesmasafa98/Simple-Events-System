import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/student.service';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {

  student:Student = new Student(0,"","","");
  oldEmail:string = "";
  constructor(public studentSrv:StudentService, public router:Router, public ar:ActivatedRoute) { }

  ngOnInit(): void {
    this.ar.params.subscribe(param=>{
      this.studentSrv.getStudent(+param["id"]).subscribe(res=>{
        this.student = res;
        this.oldEmail = this.student.email;
      })
    })
  }

  editStudent(e:any)
  {
    e.preventDefault();
    this.studentSrv.editStudentProfile(this.student.id, this.student, this.oldEmail).subscribe(res=>{
      if(res.success)
      {
        this.router.navigateByUrl("/admin/students");
      }
    })
  }

}
