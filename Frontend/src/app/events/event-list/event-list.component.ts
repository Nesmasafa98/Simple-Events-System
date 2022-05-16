import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  events:Event[] = [];
  constructor(public eventSrv:EventService) { }

  ngOnInit(): void {
    this.eventSrv.getEvents().subscribe(e=>{
      console.log(e);
    });
  }

}
