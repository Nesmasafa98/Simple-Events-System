import { NgModule } from "@angular/core";
import {  RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";

const routes:Routes = [
    {path:"home", component:HomeComponent},
    {path:"events", loadChildren: ()=> import("src/app/events/events.module").then(m=>m.EventsModule)},
    {path:"students", loadChildren: ()=> import("src/app/students/students.module").then(m=>m.StudentsModule)},
    {path:"speakers", loadChildren: ()=> import("src/app/speakers/speakers.module").then(m=>m.SpeakersModule)},

]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class AdminRoutingModule{}