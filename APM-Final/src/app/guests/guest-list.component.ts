import { Component } from "@angular/core";
// decorator
@Component
({
  selector: 'pm-guest',
  templateUrl: './guest-list.component.html',
  styleUrls: ['./guest-list.component.css']
})

// public export
export class GuestListComponent{
  pageTitle: string = 'Guest List';
  greenCheckUrl: string = './assets/images/greencheck.png';
  redCheckUrl: string = './assets/images/redx.png';
  imageWidth: number = 25;
  imageMargin: number = 2;
  showImage: boolean = false;
  onlyRSVP: boolean = false;

  listFilter: string = '';
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
        "numberofGuests": 5
      }
  ];

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  toggleRSVP(): void {
    this.onlyRSVP = !this.onlyRSVP;
  }
}
