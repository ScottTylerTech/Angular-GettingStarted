import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';

import { GuestModule } from './guests/guest.module';
import { GuestDetailComponent } from './guests/guest-detail.component';
import { InformationComponent } from './info/information/information.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    GuestDetailComponent,
    InformationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent }, // first match wins
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' } //404
    ]),
    GuestModule
  ],
  bootstrap: [AppComponent]
})

export class AppModule {

}
