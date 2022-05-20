import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from './_models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  baseUrl:string = "http://localhost:8080/";
  constructor(public http:HttpClient) { }

  getStudents()
  {
    return this.http.get<Student[]>(this.baseUrl + "students");
  }

  getStudent(id:number)
  {
    return this.http.get<Student>(this.baseUrl + "students/" + id);
  }

  editStudent(id:number, data:any)
  {
    return this.http.put<any>(this.baseUrl + "students/" + id, data);
  }

  deleteStudent(id:number)
  {
    return this.http.delete<any>(this.baseUrl + "students/" + id);
  }

  editStudentProfile(id:number, student:Student, oldEmail:string)
  {
    return this.http.put<any>(this.baseUrl + "students/profile/" + id, {id:student.id, email:student.email, oldEmail});
  }
}
