import { Component } from '@angular/core';
import { Tarjeta } from '../../models/tarjeta';
import { tarjetas } from '../../data/datos';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.component.html',
  styles: [
  ]
})
export class AlertaComponent {

  lista: Tarjeta[]=[];

  constructor(){
    this.lista = tarjetas;
    console.log(this.lista);
  }
}
