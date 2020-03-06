import { Component } from '@angular/core';

interface Comida {
  valor: string;
  nombre: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tuto01 editado';
  comidas: Comida[] = [
    {valor: 'steak-0', nombre: 'Steak'},
    {valor: 'pizza-1', nombre: 'Pizza'},
    {valor: 'tacos-2', nombre: 'Tacos'}
  ];

  public test(): void {
    console.log('Hola soy el método Test ... :D');
  }
}
