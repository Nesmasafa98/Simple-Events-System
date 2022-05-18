import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventAddComponent } from './event-add/event-add.component';
import { EventEditComponent } from './event-edit/event-edit.component';
import { EventDeleteComponent } from './event-delete/event-delete.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventListComponent } from './event-list/event-list.component';
import { RouterModule } from '@angular/router';
import { EventRoutingModule } from './events.routing';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EventAddComponent,
    EventEditComponent,
    EventDeleteComponent,
    EventDetailsComponent,
    EventListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    EventRoutingModule,
    FormsModule
  ],
  exports: [
    EventListComponent
  ]
})
export class EventsModule { }
