import { Component, OnInit } from '@angular/core';
import { OnceInicialService } from '../once-inicial.service';
import { Player } from '../player-list/Player';

@Component({
	selector: 'app-once-inicial',
	templateUrl: './once-inicial.component.html',
	styleUrls: ['./once-inicial.component.scss']
})
export class OnceInicialComponent implements OnInit {
	OnceIniciales:Player[]=[];
	constructor(private once: OnceInicialService) {
		once.OnceIniciales.subscribe(p=>this.OnceIniciales=p);
	}

	ngOnInit(): void {
	}
}
