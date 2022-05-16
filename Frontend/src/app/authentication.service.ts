import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
}
