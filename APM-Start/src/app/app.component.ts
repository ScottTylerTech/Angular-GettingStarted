import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template:`<div><h1>{{pageTitle}}</h1>
    <div>Components</div>
  </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'Shirley Wedding Guest List';
}
