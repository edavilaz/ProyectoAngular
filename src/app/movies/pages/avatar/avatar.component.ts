import { Component } from '@angular/core';
import { Tarjeta } from '../../models/tarjeta';
import { tarjetas } from '../../data/datos';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styles: [
  ]
})
export class AvatarComponent {

  lista: Tarjeta[]=[];

  constructor(){
    this.lista = tarjetas;
    console.log(this.lista);
  }
}
