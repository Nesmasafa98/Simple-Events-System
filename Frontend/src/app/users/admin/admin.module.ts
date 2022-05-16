import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { EventsModule } from 'src/app/events/events.module';
import { AdminRoutingModule } from './admin.routing';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    EventsModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
