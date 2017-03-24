import { Component, ElementRef, ViewChild, Renderer, AfterViewInit } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'contact-tuknal',
	templateUrl: './contact.tmp.html',
	styleUrls: ['contact.styl.css']
})
export class ContactTuKnal implements AfterViewInit{
	@ViewChild('dfStr') dfStr: ElementRef;
	@ViewChild('canStr') canStr: ElementRef;
	@ViewChild('telCt') telCt: ElementRef;
	@ViewChild('writeCt') writeCt: ElementRef;

	telDFSec: ElementRef;
	telCanSec: ElementRef;
	writeDFSec: ElementRef;
	writeCanSec: ElementRef;

	constructor(private rend: Renderer){
	}

	ngAfterViewInit(){
		this.telDFSec = this.telCt.nativeElement.children[1];
		this.telCanSec = this.telCt.nativeElement.children[2];

		this.writeDFSec = this.writeCt.nativeElement.children[1];
		this.writeCanSec = this.writeCt.nativeElement.children[2];
	}


	changeActiveDiv(event){
		let targetClasses = event.target.parentElement.className.split(' ');

		if(targetClasses.length > 0 && targetClasses !== undefined && targetClasses !== null){
			targetClasses.forEach((classN, idx) => {
				if(classN == 'cdmxSec'){

					this.rend.setElementClass(this.dfStr.nativeElement, 'activeSection', true);
					this.rend.setElementClass(this.telDFSec, 'activeSection', true);
					this.rend.setElementClass(this.writeDFSec, 'activeSection', true);


					this.rend.setElementClass(this.canStr.nativeElement, 'activeSection', false);
					this.rend.setElementClass(this.telCanSec, 'activeSection', false);
					this.rend.setElementClass(this.writeCanSec, 'activeSection', false);

				}else if(classN == 'canSec'){
					
					this.rend.setElementClass(this.dfStr.nativeElement, 'activeSection', false);
					this.rend.setElementClass(this.telDFSec, 'activeSection', false);
					this.rend.setElementClass(this.writeDFSec, 'activeSection', false);


					this.rend.setElementClass(this.canStr.nativeElement, 'activeSection', true);
					this.rend.setElementClass(this.telCanSec, 'activeSection', true);
					this.rend.setElementClass(this.writeCanSec, 'activeSection', true);

				}
			});
		}
	}

}
