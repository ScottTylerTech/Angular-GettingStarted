import { Component } from "@angular/core";

// decorator
@Component
({
  selector: 'pm-guest',
  templateUrl: './guest-list.component.html'
})

// public export
export class GuestListComponent{
  pageTitle: string = 'Guest List';
  guests: any[] = [
      {
        "name": "George Washington",
        "invited": true,
        "rsvp": true,
        "numberofGuests": 2
      },
      {
        "name": "John Adams",
        "invited": true,
        "rsvp": true,
        "numberofGuests": 2
      },
      {
        "name": "Thomas Jeffereson",
        "invited": true,
        "rsvp": false,
        "numberofGuests": 0
      }
  ];
}
