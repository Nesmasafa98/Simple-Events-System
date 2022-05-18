import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Event } from './_models/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  baseUrl:string = "http://localhost:8080/";
  constructor(public http:HttpClient) { }

  getEvents()
  {
    return this.http.get<Event[]>(this.baseUrl + "events");
  }

  getEvent(id:number)
  {
    return this.http.get<Event>(this.baseUrl + "events/" + id);
  }

  editEvent(id:number, data:any)
  {
    return this.http.put<any>(this.baseUrl + "events/" + id, data);
  }

  deleteEvent(id:number)
  {
    return this.http.delete<any>(this.baseUrl + "events/" + id);
  }

  addEvent(data:Event)
  {
    return this.http.post<any>(this.baseUrl + "events/", data);
  }
}
