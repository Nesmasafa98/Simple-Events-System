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
}
