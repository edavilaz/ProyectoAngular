import { Component } from '@angular/core';
import { Tarjeta } from '../../models/tarjeta';
import { tarjetas } from '../../data/datos';

@Component({
  selector: 'app-wakanda',
  templateUrl: './wakanda.component.html',
  styles: [
  ]
})
export class WakandaComponent {
  lista: Tarjeta[]=[];

  constructor(){
    this.lista = tarjetas;
    console.log(this.lista);
  }

}
