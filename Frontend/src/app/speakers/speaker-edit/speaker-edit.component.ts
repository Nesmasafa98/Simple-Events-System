import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpeakerService } from 'src/app/speaker.service';
import { Speaker } from 'src/app/_models/speaker';

@Component({
  selector: 'app-speaker-edit',
  templateUrl: './speaker-edit.component.html',
  styleUrls: ['./speaker-edit.component.css']
})
export class SpeakerEditComponent implements OnInit {

  speaker:Speaker = new Speaker("","","","","","",0);
  oldEmail:string = "";
  constructor(public speakerSrv:SpeakerService, public router:Router, public ar:ActivatedRoute) { }

  ngOnInit(): void {
    this.ar.params.subscribe(param=>{
      this.speakerSrv.getSpeaker(param["id"]).subscribe(res=>{
        this.speaker = res;
        this.oldEmail = this.speaker.email;
      })
    })
  }

  editSpeaker(e:any)
  {
    e.preventDefault();
    this.speakerSrv.editSpeakerProfile(this.speaker.id, this.speaker, this.oldEmail).subscribe(res=>{
      if(res.success)
      {
        this.router.navigateByUrl("/admin/speakers");
      }
    })
  }

}
