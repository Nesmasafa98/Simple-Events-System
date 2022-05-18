import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/app/event.service';
import { SpeakerService } from 'src/app/speaker.service';
import { Event } from 'src/app/_models/event';
import { Speaker } from 'src/app/_models/speaker';

@Component({
  selector: 'app-event-add',
  templateUrl: './event-add.component.html',
  styleUrls: ['./event-add.component.css']
})
export class EventAddComponent implements OnInit {

  event:Event = new Event(0, "", new Date(), "", [], []);
  speakers:Speaker[] = [];
  constructor(public eventSrv:EventService, public speakerSrv:SpeakerService, public router:Router) { }

  ngOnInit(): void {
    this.speakerSrv.getSpeakers().subscribe(res=>{
      this.speakers = res;
    })
  }

  addEvent(e:any)
  {
    e.preventDefault();
    console.log(this.event)

    this.eventSrv.addEvent(this.event).subscribe((res)=>{
      if(res.success)
      {
        this.router.navigateByUrl("/admin/events");
      }
      else
      {
        console.log(res.message)
      }
    })
  }

}
