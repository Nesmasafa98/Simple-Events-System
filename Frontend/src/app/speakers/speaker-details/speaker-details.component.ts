import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpeakerService } from 'src/app/speaker.service';
import { Speaker } from 'src/app/_models/speaker';

@Component({
  selector: 'app-speaker-details',
  templateUrl: './speaker-details.component.html',
  styleUrls: ['./speaker-details.component.css']
})
export class SpeakerDetailsComponent implements OnInit {

  speaker:Speaker = new Speaker("","","","","","",0);
  
  constructor(public speakerSrv:SpeakerService, public router:Router, public ar:ActivatedRoute) { }

  ngOnInit(): void {
    this.ar.params.subscribe(param=>{
      this.speakerSrv.getSpeaker(param["id"]).subscribe(res=>{
        this.speaker = res;
      })
    })
  }

}
