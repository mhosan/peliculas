import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuscarComponent } from './componentes/buscar/buscar.component';
import { MostrarComponent } from './componentes/mostrar/mostrar.component';
import { NotFoundPageComponent } from './componentes/not-found-page/not-found-page.component';

const routes: Routes = [
  {path: '', component: MostrarComponent},
  //{path: 'buscar', component: BuscarComponent},
  {path: 'mostrar', component: MostrarComponent},
  {path: '**', component: NotFoundPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
