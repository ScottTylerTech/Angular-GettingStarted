import { Injectable } from "@angular/core";
import { IGuest } from "./guests";

@Injectable({
  providedIn: 'root'
})
export class GuestService{

  getGuests(): IGuest[]{
    return [
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
      "numberofGuests": 5
    },
    {
      "name": "James Madison",
      "invited": true,
      "rsvp": true,
      "numberofGuests": 1
    },
    {
      "name": "James Monroe",
      "invited": true,
      "rsvp": true,
      "numberofGuests": 2
    },
    {
      "name": "John Adams",
      "invited": true,
      "rsvp": true,
      "numberofGuests": 1
    },
    {
      "name": "Andrew Jackson",
      "invited": true,
      "rsvp": false,
      "numberofGuests": 3
    },
    {
      "name": "Martin Van Buren",
      "invited": true,
      "rsvp": true,
      "numberofGuests": 4
    },
    {
      "name": "William Harrieson",
      "invited": false,
      "rsvp": false,
      "numberofGuests": 1
    }
  ];
}
}
