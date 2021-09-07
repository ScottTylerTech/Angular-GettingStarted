import { Component, OnInit } from '@angular/core';

@Component({
  // displayed with routing, no need for selector
  //selector: 'pm-guest-detail',
  templateUrl: './guest-detail.component.html',
  styleUrls: ['./guest-detail.component.css']
})
export class GuestDetailComponent implements OnInit {

  pageTitle: string = 'Guest Details';

  constructor() { }

  ngOnInit(): void {
  }

}
