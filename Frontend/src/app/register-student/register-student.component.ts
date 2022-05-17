import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { Student } from '../_models/student';

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.css']
})
export class RegisterStudentComponent implements OnInit {

  constructor(public authSrv:AuthenticationService, public router:Router) { }

  ngOnInit(): void {
  }

  createUser(e: any, email: string, username: string, password: string) {
    e.preventDefault();

    this.authSrv.registerStudent({ email, username, password }).subscribe(res => {
      this.redirectUser(res);
    })
  }

  redirectUser(res: any) {
    sessionStorage.setItem("Token", res.token);
    this.router.navigateByUrl("/student");
  }
}
