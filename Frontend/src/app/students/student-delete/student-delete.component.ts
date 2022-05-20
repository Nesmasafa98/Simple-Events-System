import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-student-delete',
  templateUrl: './student-delete.component.html',
  styleUrls: ['./student-delete.component.css']
})
export class StudentDeleteComponent implements OnInit {

  constructor(public studentSrv:StudentService, public ar:ActivatedRoute, public router:Router) { }

  ngOnInit(): void {
    this.deleteStudent();
  }

  deleteStudent()
  {
    this.ar.params.subscribe((param)=>{
      this.studentSrv.deleteStudent(+param['id']).subscribe(res=>{
        if(res.success)
        {
          this.router.navigateByUrl("/admin/students");
        }
      });
      })
  }
}
