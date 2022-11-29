import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-argentina-partidos',
	templateUrl: './argentina-partidos.component.html',
	styleUrls: ['./argentina-partidos.component.scss']
})
export class ArgentinaPartidosComponent implements OnInit {
	matches = [{
		'match':'Argentina vs Arabia Saudita',
		'day':'22/11',
		'hour':'7:00',
		'place':'Estadio Lusail, Lusail, Qatar'
	},{
		'match':'Argentina vs Mexico',
		'day':'26/11',
		'hour':'16:00',
		'place':'Estadio Lusail, Lusail, Qatar'
	},{
		'match':'Polonia vs Argentina',
		'day':'30/11',
		'hour':'16:00',
		'place':'Estadio 974, Doha, Qatar'
	}]
	constructor() { }

  ngOnInit(): void {
		}

	}
