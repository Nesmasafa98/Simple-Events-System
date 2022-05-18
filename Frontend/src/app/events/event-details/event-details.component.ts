import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/event.service';
import { Event } from 'src/app/_models/event';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  event:Event = new Event(0, "", new Date(), "", [], []);

  constructor(public ar:ActivatedRoute, public eventSrv:EventService) { }

  ngOnInit(): void {
    this.ar.params.subscribe((param)=>{
    this.eventSrv.getEvent(+param['id']).subscribe(res=>{
      this.event = res;
      console.log(this.event)
    });
    })
  }

}
