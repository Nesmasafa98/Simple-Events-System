import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Speaker } from './_models/speaker';

@Injectable({
  providedIn: 'root'
})
export class SpeakerService {

  baseUrl:string = "http://localhost:8080/";
  constructor(public http:HttpClient) { }

  getSpeakers()
  {
    return this.http.get<Speaker[]>(this.baseUrl + "speakers");
  }

  getSpeaker(id:number)
  {
    return this.http.get<Speaker>(this.baseUrl + "speakers/" + id);
  }

  editSpeaker(id:number, data:any)
  {
    return this.http.put<any>(this.baseUrl + "speakers/" + id, data);
  }

  deleteSpeaker(id:number)
  {
    return this.http.delete<any>(this.baseUrl + "speakers/" + id);
  }

  addEvent(data:Event)
  {
    return this.http.post<any>(this.baseUrl + "events/", data);
  }
}
