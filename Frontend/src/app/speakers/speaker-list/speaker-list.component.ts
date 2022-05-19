import { Component, OnInit } from '@angular/core';
import { SpeakerService } from 'src/app/speaker.service';
import { Speaker } from 'src/app/_models/speaker';

@Component({
  selector: 'app-speaker-list',
  templateUrl: './speaker-list.component.html',
  styleUrls: ['./speaker-list.component.css']
})
export class SpeakerListComponent implements OnInit {

  speakers:Speaker[] = [];
  constructor(public speakerSrv:SpeakerService) { }

  ngOnInit(): void {
    this.speakerSrv.getSpeakers().subscribe(res=>{
      this.speakers = res;
    });
  }

}
