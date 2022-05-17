import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-register-speaker',
  templateUrl: './register-speaker.component.html',
  styleUrls: ['./register-speaker.component.css']
})
export class RegisterSpeakerComponent implements OnInit {

  constructor(public authSrv:AuthenticationService, public router:Router) { }

  ngOnInit(): void {
  }

  createUser(e: any, email: string, username: string, password: string, city:string, street:string, building:number) {
    e.preventDefault();

    this.authSrv.registerSpeaker({ email, username, password, city, street, building }).subscribe(res => {
      this.redirectUser(res);
    })
  }

  redirectUser(res: any) {
    sessionStorage.setItem("Token", res.token);
    this.router.navigateByUrl("/speaker");
  }

}
