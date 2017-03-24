import { Component, ElementRef, Renderer } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	moduleId: module.id,
	selector: 'top-menu',
	templateUrl: './menu.tmp.html',
	styleUrls: ['menu.styl.css']
})
export class TopMenu {
	menuDown: boolean = false;

	constructor(private ren: Renderer, private route: Router){}

	dropMenu(Menu: ElementRef){
		console.log(Menu);
		(!this.menuDown) ? this.ren.setElementClass(Menu, 'dropNow', true) : this.ren.setElementClass(Menu, 'dropNow', false);
		this.menuDown = !this.menuDown;
	}

	toHome(){
		this.route.navigate(['/']);
	}
}
