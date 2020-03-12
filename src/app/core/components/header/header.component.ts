import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  private mediaQuery: MediaQueryList = matchMedia('(max-width:720px)');
  constructor() { }

  showBtn() {
    return this.mediaQuery.matches;
  }
}
