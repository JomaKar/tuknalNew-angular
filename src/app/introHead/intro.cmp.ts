import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'intro-tuknal',
	templateUrl: './intro.tmp.html',
	styleUrls: ['intro.styl.css']
})
export class IntroductionTuknal {
	myLineTxt: string = 'Tuknal es una agencia con la que querrás trabajar. Nuestros servicios son de una alta variedad y calidad';

	constructor(){
	}


}
