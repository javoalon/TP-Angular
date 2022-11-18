import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArgentinaJugadoresComponent } from './argentina-jugadores/argentina-jugadores.component';
import { ArgentinaPartidosComponent } from './argentina-partidos/argentina-partidos.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'argentina',
    pathMatch: 'full'
  },{
    path: 'argentina',
    component: ArgentinaJugadoresComponent
  },{
    path: 'partidos',
    component: ArgentinaPartidosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
