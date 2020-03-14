import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-animate',
  templateUrl: './animate.component.html',
  styleUrls: ['./animate.component.css'],
  animations: [
    trigger('aniBtn', [
      state('inactivo', style({
        backgroundColor: 'red',
        transform: 'scale(1)'
      })),
      state('activo', style({
        backgroundColor: 'green',
        transform: 'scale(1.5)'
      })),
      transition('inactivo => activo', animate('500ms ease-in')),
      transition('activo => inactivo', animate('500ms ease-out'))
    ])
  ]
})
export class AnimateComponent implements OnInit {
  estado = 'inactivo';

  constructor() { }

  ngOnInit(): void {
  }

  clickBtn(): void {
    this.estado = (this.estado === 'activo') ? 'inactivo' : 'activo';
    console.log(this.estado);
  }

}
