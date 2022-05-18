import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from 'src/app/event.service';

@Component({
  selector: 'app-event-delete',
  templateUrl: './event-delete.component.html',
  styleUrls: ['./event-delete.component.css']
})
export class EventDeleteComponent implements OnInit {

  constructor(public eventSrv:EventService, public ar:ActivatedRoute, public router:Router) { }

  ngOnInit(): void {
    this.deleteEvent();
  }

  deleteEvent()
  {
    this.ar.params.subscribe((param)=>{
      this.eventSrv.deleteEvent(+param['id']).subscribe(res=>{
        if(res.success)
        {
          this.router.navigateByUrl("/admin/events");
        }
      });
      })
  }

}
