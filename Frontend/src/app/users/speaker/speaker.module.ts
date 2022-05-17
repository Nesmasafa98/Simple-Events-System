import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SpeakerRoutingModule } from './speaker.routing';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    SpeakerRoutingModule
  ]
})
export class SpeakerModule { }
