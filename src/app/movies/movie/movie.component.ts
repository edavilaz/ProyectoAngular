import { Component } from '@angular/core';
import { Tarjeta } from '../models/tarjeta';
import { tarjetas } from '../data/datos';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styles: [
  ]
})
export class MovieComponent { 
  lista: Tarjeta[]=[];

  constructor(){
    this.lista = tarjetas;
    console.log(this.lista);
  }

}
