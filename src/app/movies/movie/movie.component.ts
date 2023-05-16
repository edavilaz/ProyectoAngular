import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
  
})
export class MovieComponent { 
  peliculasPopulares: any[] = [];
  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.obtenerPopulares();
  }
  obtenerPopulares() {
    this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=1c9824c7805ecfccebc172e98b454cf3&language=es-MX&region=MX&page=1')
      .subscribe((result: any) => {
        this.peliculasPopulares = result.results;
      }, (error: any) => {
        console.log('fallo la solicitud');
      });
  }
/*
  constructor(){
    
    this.lista = tarjetas;
    console.log(this.lista);
  }*/

}
