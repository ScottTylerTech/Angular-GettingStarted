import { Component, OnDestroy, OnInit } from "@angular/core";
import { IGuest } from "./guests";
import { GuestService } from "./guest.service";
import { Subscription } from "rxjs";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";

// decorator
@Component
({
  selector: 'pm-guest',
  templateUrl: './guest-list.component.html',
  styleUrls: ['./guest-list.component.css']
})

// public export
  // lifecycle hooks
export class GuestListComponent implements OnInit, OnDestroy{
  constructor(private guestService: GuestService){}

  pageTitle: string = 'Guest List';
  errorMessage: string = '';
  sub!: Subscription;

  greenCheckUrl: string = './assets/images/greencheck.png';
  redCheckUrl: string = './assets/images/redx.png';
  filterUrl: string = './assets/images/filter.png';
  imageWidth: number = 25;
  imageMargin: number = 2;
  showImage: boolean = false;
  onlyRSVP: boolean = false;

  filteredGuests: IGuest[] = [];
  filterName: boolean = false;
  filterInviteSent: boolean = false;
  filterRSVP: boolean = false;
  filterNumberOfGuests: boolean = false;

  // getter and setter
  private _listFilter: string = '';
  get listFilter(): string{
    return this._listFilter;
  }
  set listFilter(value: string){
    this._listFilter = value;
    console.log('In setter: ', value);
    this.filteredGuests = this.performNameFilter(value);
  }

  private _totalNumberOfGuests: number = 0;
  get totalNumberOfGuests(): number{
    this._totalNumberOfGuests = 0;
    for(const guest of this.filteredGuests){
      this._totalNumberOfGuests += guest.numberofGuests;
    }
    return this._totalNumberOfGuests;
  }

  private _totalGuestAttending: number = 0;
  get totalGuestsAttending(): number{
    this._totalGuestAttending = 0;
    for(const guest of this.filteredGuests){
      if(guest.rsvp){
        this._totalGuestAttending += guest.numberofGuests;
      }
    }
    return this._totalGuestAttending;
  }

  guests: IGuest[] = [];

  performNameFilter(filterBy: string): IGuest[] {
    filterBy = filterBy.toLowerCase();
    return this.guests.filter((guest: IGuest) =>
      guest.name.toLocaleLowerCase().includes(filterBy));
  }

  performRSVPFilter(): IGuest[] {
    return this.filteredGuests.filter((guest: IGuest) =>
      guest.rsvp)
  }

  sortGuestName(): void {
    this.filteredGuests.sort((g1: IGuest, g2: IGuest) => {
    if(g1.name > g2.name){
      return 1;
    }
    if(g1.name < g2.name){
      return -1;
    }
    return 0;
    });
    this.filterName = !this.filterName;
    if(this.filterName){
      this.filteredGuests.reverse();
    }
  }

  sortInviteSent(): void{
    this.filteredGuests.sort((g1: IGuest, g2: IGuest) => {
      return (g1.invited === g2.invited) ? 0 : g1.invited ? -1 : 1
    });

    this.filterInviteSent = !this.filterInviteSent;
    if(this.filterInviteSent){
      this.filteredGuests.reverse();
    }
  }

  sortRSVP(): void{
    this.filteredGuests.sort((g1: IGuest, g2: IGuest) => {
      return (g1.rsvp === g2.rsvp) ? 0 : g1.rsvp ? -1 : 1
      });

    this.filterRSVP = !this.filterRSVP;
    if(this.filterRSVP){
      this.filteredGuests.reverse();
    }
  }

  sortNumberOfGuest(): void{
    this.filteredGuests.sort((g1: IGuest, g2: IGuest) => {
      if(g1.numberofGuests > g2.numberofGuests){
        return 1;
      }
      if(g1.numberofGuests <= g2.numberofGuests){
        return -1;
      }
      return 0;
      });

    this.filterNumberOfGuests = !this.filterNumberOfGuests;
    if(this.filterNumberOfGuests){
      this.filteredGuests.reverse();
    }
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  toggleRSVP(): void {
    this.onlyRSVP = !this.onlyRSVP;
    if(this.onlyRSVP){
      this.filteredGuests = this.performRSVPFilter();
    }else{
      this.filteredGuests = this.performNameFilter(this._listFilter);
    }
  }

  // must be implemented from interface
  ngOnInit(): void{
    this.sub = this.guestService.getGuests().subscribe(
      {next: guests => {
         this.guests = guests;
        this.filteredGuests = this.guests;
      },
      error: err => this.errorMessage = err
    }
    );
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  };
}
