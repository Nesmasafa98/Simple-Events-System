import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from 'src/app/event.service';
import { SpeakerService } from 'src/app/speaker.service';
import { StudentService } from 'src/app/student.service';
import { Event } from 'src/app/_models/event';
import { Speaker } from 'src/app/_models/speaker';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.css']
})
export class EventEditComponent implements OnInit {

  event:Event = new Event(0, "", new Date(), "", [], []);
  speakers:Speaker[] = [];
  currentSpeakers:Speaker[] = [];
  currentStudents:Student[] = [];

  newSpeakers:Speaker[] = [];
  newStudents:Student[] = [];
  date:string = "";

  constructor(public eventSrv:EventService, public studentSrv:StudentService, public speakerSrv:SpeakerService, public router:Router, public ar:ActivatedRoute) { }

  ngOnInit(): void {
    this.ar.params.subscribe(param => {
      this.eventSrv.getEvent(+param['id']).subscribe(res => {
        this.event = res;
        this.date = this.event.eventDate.toString().split("T")[0];

        this.event.otherSpeakers.forEach(speaker => {
          this.speakerSrv.getSpeaker(speaker).subscribe(res => {
            this.currentSpeakers.push(res);
          });
        });
        this.event.students.forEach(student => {
          this.studentSrv.getStudent(+student).subscribe(res => {
            this.currentStudents.push(res);
          });
        });
      });
    });

    this.speakerSrv.getSpeakers().subscribe(res=>{
      this.speakers = res;
    });
  }

  editEvent(e:any, d:string)
  {
    e.preventDefault();
    console.log(this.event)
    this.event.eventDate = d;
    this.eventSrv.editEvent(this.event.id,this.event).subscribe((res)=>{
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
