import { NgModule } from "@angular/core";
import {  RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";

const routes:Routes = [
    {path:"",component:HomeComponent},
    {path:"events", loadChildren: ()=> import("src/app/events/events.module").then(m=>m.EventsModule)},

]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class AdminRoutingModule{}