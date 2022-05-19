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

  getSpeaker(id:string)
  {
    return this.http.get<Speaker>(this.baseUrl + "speakers/" + id);
  }

  editSpeaker(id:string, data:any)
  {
    return this.http.put<any>(this.baseUrl + "speakers/" + id, data);
  }

  deleteSpeaker(id:string)
  {
    return this.http.delete<any>(this.baseUrl + "speakers/" + id);
  }

  editSpeakerProfile(id:string, speaker:Speaker, oldEmail:string)
  {
    return this.http.put<any>(this.baseUrl + "speakers/profile/" + id, {id:speaker.id,email:speaker.email,city:speaker.city,street:speaker.street,building:speaker.building, oldEmail});
  }
}
