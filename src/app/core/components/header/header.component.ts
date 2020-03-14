import { Component, OnInit, VERSION, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { NavItem } from '../../model/nav-item';
import { NavService } from '../../services/nav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {

  version = VERSION;

  @ViewChild('sideNav') sideNav: ElementRef;

  navItems: NavItem[] = [
    {
      displayName: 'Usuario',
      iconName: 'supervised_user_circle',
      route: '/',
      children: [
       { displayName: 'Inicio', iconName: 'home', route: '/' },
       { displayName: 'Nosotros', iconName: 'information-outline', route: 'about'},
      ]
    },
    {  displayName: 'Intranet',
      iconName: 'domain',
      route: 'intranet',
      children: [
        { displayName: 'Inicio', iconName: 'home', route: 'intranet' },
        { displayName: 'Usuarios', iconName: 'account_circle', route: 'intranet/users' },
      ]
    }
  ];


  private mediaQuery: MediaQueryList = matchMedia('(max-width:720px)');
  constructor(private navService: NavService) { }

  ngAfterViewInit() {
    this.navService.sideNav = this.sideNav;
  }

  showBtn() {
    return this.mediaQuery.matches;
  }
}
