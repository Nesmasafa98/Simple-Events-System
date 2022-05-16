import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventAddComponent } from './event-add/event-add.component';
import { EventEditComponent } from './event-edit/event-edit.component';
import { EventDeleteComponent } from './event-delete/event-delete.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventListComponent } from './event-list/event-list.component';



@NgModule({
  declarations: [
    EventAddComponent,
    EventEditComponent,
    EventDeleteComponent,
    EventDetailsComponent,
    EventListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EventListComponent
  ]
})
export class EventsModule { }
