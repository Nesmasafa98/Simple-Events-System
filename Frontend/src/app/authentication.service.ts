import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Speaker } from './_models/speaker';
import { Student } from './_models/student';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  baseUrl:string = "http://localhost:8080/";
  constructor(public http:HttpClient) { }

  login(data:any)
  {
    return this.http.post<any>(this.baseUrl + "login",data);
  }

  registerStudent(data:any)
  {
    
    return this.http.post<any>(this.baseUrl + "register/student",
          {email:data.email, username: data.username, password: data.password, role:"Student"});
  }

  registerSpeaker(data:any)
  {
    return this.http.post<any>(this.baseUrl + "register/speaker", 
          {email:data.email, username:data.username, password:data.password, city:data.city, street:data.street, building:data.building, role:"Speaker"});
  }
}
