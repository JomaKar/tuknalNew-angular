import { Component } from '@angular/core';
import { client } from './clienClass';

@Component({
	moduleId: module.id,
	selector: 'clients-tuknal',
	templateUrl: './client.tmp.html',
	styleUrls: ['client.styl.css']
})
export class ClientsTuKnal {
	title = 'clients here';
	clients: client[] = [
		{id: 1, logo: './assets/galerias.png', name: 'galerías-cuernavaca'},
		{id: 2, logo: './assets/uvm.png', name: 'uvm'},
		{id: 3, logo: './assets/telecom.png', name: 'telecom'},
		{id: 4, logo: './assets/issste.png', name: 'ISSSTE'}
	];
	
	myLineTxt: string = 'Nuestros principales clientes';
}
