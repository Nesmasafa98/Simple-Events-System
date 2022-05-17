import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data = {
    email:"",
    password:""
  }

  constructor(public authSrv:AuthenticationService, public router:Router) { }

  ngOnInit(): void {
  }

  login(event:any,e:string,p:string)
  {
    event.preventDefault();
    this.data.email = e;
    this.data.password = p;
    this.authSrv.login(this.data).subscribe(res=>{
      
      if(res.role == "Admin")
      {
        sessionStorage.setItem("Token", res.token);
        this.router.navigateByUrl("/admin");
      }
      else if(res.role == "Student")
      {

      }
      else if(res.role == "Speaker")
      {
        
      }
    })
  }

}
