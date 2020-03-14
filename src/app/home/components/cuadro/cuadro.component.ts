import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cuadro',
  templateUrl: './cuadro.component.html',
  styleUrls: ['./cuadro.component.css']
})
export class CuadroComponent implements OnInit {

  @Input() datos;
  @Output() emitEvento: EventEmitter<any> = new EventEmitter();

  frutas = [
    { fruta: 'manzana' },
    { fruta: 'naranja' },
    { fruta: 'freza' },
  ];

  texto = 'Hola desde cuadro';

  constructor() { }

  ngOnInit(): void {
  }

  evento(): void {
    // console.log(`Vengo del padre:`,  this.datos);
    this.emitEvento.emit(this.frutas);
  }

}
