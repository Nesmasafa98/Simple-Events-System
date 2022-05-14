import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeakerAddComponent } from './speaker-add/speaker-add.component';
import { SpeakerEditComponent } from './speaker-edit/speaker-edit.component';
import { SpeakerListComponent } from './speaker-list/speaker-list.component';
import { SpeakerDetailsComponent } from './speaker-details/speaker-details.component';
import { SpeakerDeleteComponent } from './speaker-delete/speaker-delete.component';



@NgModule({
  declarations: [
    SpeakerAddComponent,
    SpeakerEditComponent,
    SpeakerListComponent,
    SpeakerDetailsComponent,
    SpeakerDeleteComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SpeakersModule { }
