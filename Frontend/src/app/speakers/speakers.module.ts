import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeakerEditComponent } from './speaker-edit/speaker-edit.component';
import { SpeakerListComponent } from './speaker-list/speaker-list.component';
import { SpeakerDetailsComponent } from './speaker-details/speaker-details.component';
import { SpeakerDeleteComponent } from './speaker-delete/speaker-delete.component';
import { SpeakersRoutingModule } from './speakers.routing';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SpeakerEditComponent,
    SpeakerListComponent,
    SpeakerDetailsComponent,
    SpeakerDeleteComponent
  ],
  imports: [
    CommonModule,
    SpeakersRoutingModule,
    FormsModule
  ]
})
export class SpeakersModule { }
