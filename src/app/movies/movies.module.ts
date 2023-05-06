import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MovieComponent } from './movie/movie.component';
import { SharedModule } from '../shared/shared.module';
import { AlertaComponent } from './pages/alerta/alerta.component';
import { AvatarComponent } from './pages/avatar/avatar.component';
import { BodasComponent } from './pages/bodas/bodas.component';
import { SociosComponent } from './pages/socios/socios.component';
import { HombreComponent } from './pages/hombre/hombre.component';
import { WakandaComponent } from './pages/wakanda/wakanda.component';


@NgModule({
  declarations: [
    MovieComponent,
    AvatarComponent,
    BodasComponent,
    SociosComponent,
    HombreComponent,
    WakandaComponent,
    AlertaComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    SharedModule
  ]
})
export class MoviesModule { }
