import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  registerStudent() {
    this.router.navigateByUrl("/register/student");
  }

  registerSpeaker() {
    this.router.navigateByUrl("/register/speaker");
  }

}
