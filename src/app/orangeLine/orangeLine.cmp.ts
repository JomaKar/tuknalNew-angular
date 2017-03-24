import { Component, Input } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'orange-line',
	templateUrl: './orangeLine.tmp.html',
	styleUrls: ['orangeLine.styl.css']
})
export class OrangeLine {
	@Input() textMe: string;
}
