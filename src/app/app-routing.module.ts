import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeliculaComponent } from './movies/pages/pelicula/pelicula.component';




const routes: Routes = [
{
  path: '',
  //incluimos el componente en el módulo principal
  loadChildren: () => import('./movies/movies.module').then(m => m.MoviesModule),
},
{
  path: 'pelicula',
  component: PeliculaComponent 
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
