import { Component } from '@angular/core';
import { Tarjeta } from '../../models/tarjeta';
import { tarjetas } from '../../data/datos';

@Component({
  selector: 'app-bodas',
  templateUrl: './bodas.component.html',
  styles: [
  ]
})
export class BodasComponent {
  lista: Tarjeta[]=[];

  constructor(){
    this.lista = tarjetas;
    console.log(this.lista);
  }
}
