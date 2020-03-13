import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router, NavigationEnd, Event } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  public sideNav: any;
  public url = new  BehaviorSubject<string>(undefined);

  constructor( private router: Router ) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.url.next(event.urlAfterRedirects);
      }
    });
  }

  public closeNav() {
    this.sideNav.close();
  }

  public openNav() {
    this.sideNav.open();
  }
}
