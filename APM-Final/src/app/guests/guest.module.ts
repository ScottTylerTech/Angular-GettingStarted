import { NgModule } from '@angular/core';
import { GuestListComponent } from './guest-list.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    GuestListComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: 'guests', component: GuestListComponent },
      {
        path: 'guests/:id',
        component: GuestListComponent
      }
    ]),
    SharedModule
  ]
})

export class GuestModule { }
