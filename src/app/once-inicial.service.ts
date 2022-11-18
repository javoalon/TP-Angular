import { Injectable } from '@angular/core';
import { BehaviorSubject, from } from 'rxjs';
import { Player } from './player-list/Player';

@Injectable({
    providedIn: 'root'
})
export class OnceInicialService {
    private _OnceIniciales: Player[]=[];
    OnceIniciales: BehaviorSubject<Player[]>= new BehaviorSubject(this._OnceIniciales);
    constructor() {}
    addToEleven(player: Player) {
        let defensores = 0;
        let mediocampistas = 0;
        let delanteros = 0;
        let item = this._OnceIniciales.find((v1) => v1.name == player.name);
        if (!item) {
            switch (player.position) {
                case "Arquero":
                    if (!this._OnceIniciales.find((v1) => v1.position == player.position)){
                        this._OnceIniciales.push(player);
                    }
                    break;
                case "Defensor":
                    this._OnceIniciales.forEach(player => {
                        if(player.position=="Defensor")
                            defensores++;
                    });
                    if(defensores<4)
                        this._OnceIniciales.push(player);
                    break;
                case "Mediocampista":
                    this._OnceIniciales.forEach(player => {
                        if(player.position=="Mediocampista")
                            mediocampistas++;
                    });
                    if(mediocampistas<3)
                        this._OnceIniciales.push(player);
                    break;
                case "Delantero":
                    this._OnceIniciales.forEach(player => {
                        if(player.position=="Delantero")
                            delanteros++;
                    });
                    if(delanteros<3)
                        this._OnceIniciales.push(player);
                    break;
            }
        }
    }
    deleteFromEleven(playerToDelete:Player){
        const indexOfObject = this._OnceIniciales.findIndex(player => {
            return player.number === playerToDelete.number;
          });
          this._OnceIniciales.splice(indexOfObject, 1);
    }
}
