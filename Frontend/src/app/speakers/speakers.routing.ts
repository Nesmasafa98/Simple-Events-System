import { NgModule } from "@angular/core";
import {  RouterModule, Routes } from "@angular/router";
import { SpeakerDeleteComponent } from "./speaker-delete/speaker-delete.component";
import { SpeakerDetailsComponent } from "./speaker-details/speaker-details.component";
import { SpeakerEditComponent } from "./speaker-edit/speaker-edit.component";
import { SpeakerListComponent } from "./speaker-list/speaker-list.component";


const routes:Routes = [
    {path:"",component:SpeakerListComponent},
    {path:"details/:id",component:SpeakerDetailsComponent},
    {path:"delete/:id",component:SpeakerDeleteComponent},
    {path:"edit/:id",component:SpeakerEditComponent},
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class SpeakersRoutingModule{}