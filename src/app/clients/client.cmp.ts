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
		{id: 1, logo: './assets/galCuerna.png', name: 'galerías-cuernavaca'},
		{id: 2, logo: './assets/galAti.png', name: 'galerías-atizapán'},
		{id: 3, logo: './assets/galChilpan.png', name: 'galerías-chilpancingo'},
		{id: 4, logo: './assets/galInsurgentes.png', name: 'galerías-insurgentes'},
		{id: 5, logo: './assets/galMetepec.png', name: 'galerías-metepec'},
		{id: 6, logo: './assets/galCoapa.png', name: 'galerías-coapa'},
		{id: 7, logo: './assets/galVallarta.png', name: 'galerías-vallarta'},
		{id: 8, logo: './assets/perinorte.png', name: 'perinorte'},
		{id: 9, logo: './assets/perisur.png', name: 'perisur'},
		{id: 10, logo: './assets/galMont.png', name: 'galerías-monterrey'},
		{id: 11, logo: './assets/galTab.png', name: 'galerías-tabasco'},
		{id: 12, logo: './assets/galLaguna.png', name: 'galerías-laguna'},
		{id: 13, logo: './assets/galQro.png', name: 'galerías-querétaro'},
		{id: 14, logo: './assets/galSalt.png', name: 'galerías-saltillo'},
		{id: 15, logo: './assets/uvm.png', name: 'uvm'},
		{id: 16, logo: './assets/telecom.png', name: 'telecom'},
		{id: 16, logo: './assets/issste.png', name: 'ISSSTE'},
	];
	
	myLineTxt: string = 'Nuestros principales clientes';
}
