import { Component } from '@angular/core';
import { Tarjeta } from '../../models/tarjeta';
import { tarjetas } from '../../data/datos';

@Component({
  selector: 'app-hombre',
  templateUrl: './hombre.component.html',
  styles: [
  ]
})
export class HombreComponent {
  lista: Tarjeta[]=[];

  constructor(){
    this.lista = tarjetas;
    console.log(this.lista);
  }
}
