import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { InformationComponent } from "./information.component";

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forChild([
      { path: 'information', component: InformationComponent }
    ]),
    SharedModule
  ]
})

export class Information{}
