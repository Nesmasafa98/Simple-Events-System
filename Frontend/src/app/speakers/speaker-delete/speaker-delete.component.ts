import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpeakerService } from 'src/app/speaker.service';

@Component({
  selector: 'app-speaker-delete',
  templateUrl: './speaker-delete.component.html',
  styleUrls: ['./speaker-delete.component.css']
})
export class SpeakerDeleteComponent implements OnInit {

  constructor(public speakerSrv:SpeakerService, public ar:ActivatedRoute, public router:Router) { }

  ngOnInit(): void {
    this.deleteSpeaker();
  }

  deleteSpeaker()
  {
    this.ar.params.subscribe((param)=>{
      this.speakerSrv.deleteSpeaker(param['id']).subscribe(res=>{
        if(res.success)
        {
          this.router.navigateByUrl("/admin/speakers");
        }
      });
      })
  }
}
