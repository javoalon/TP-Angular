import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { OnceInicialComponent } from './once-inicial/once-inicial.component';
import { ArgentinaPartidosComponent } from './argentina-partidos/argentina-partidos.component';
import { ArgentinaJugadoresComponent } from './argentina-jugadores/argentina-jugadores.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerListComponent,
    OnceInicialComponent,
    ArgentinaPartidosComponent,
    ArgentinaJugadoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
