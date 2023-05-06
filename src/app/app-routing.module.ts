import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertaComponent } from './movies/pages/alerta/alerta.component';
import { AvatarComponent } from './movies/pages/avatar/avatar.component';
import { BodasComponent } from './movies/pages/bodas/bodas.component';
import { SociosComponent } from './movies/pages/socios/socios.component';
import { HombreComponent } from './movies/pages/hombre/hombre.component';
import { WakandaComponent } from './movies/pages/wakanda/wakanda.component';



const routes: Routes = [
{
  path: '',
  //incluimos el componente en el módulo principal
  loadChildren: () => import('./movies/movies.module').then(m => m.MoviesModule),
},
{
  path: 'alerta',
  component: AlertaComponent 
},
{
  path: 'avatar',
  component: AvatarComponent
},
{
  path: 'bodas',
  component: BodasComponent
},
{
  path: 'socios',
  component: SociosComponent
},
{
  path: 'hombre',
  component: HombreComponent
},
{
  path: 'wakanda',
  component: WakandaComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
