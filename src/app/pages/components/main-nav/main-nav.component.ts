import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {

  private mediaQuery: MediaQueryList = matchMedia('(max-width:720px)');
  constructor() { }

  showBtn() {
    return this.mediaQuery.matches;
  }


}
