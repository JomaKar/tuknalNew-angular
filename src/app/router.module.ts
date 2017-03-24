import { NgModule } from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';

import { MainContainer } from './mainContainer/mainContainer.cmp';
import { AboutUsContainer } from './aboutUsContainer/about.cmp';


const routes: Routes = [
	{ path: '', component: MainContainer, pathMatch: 'full' },
	{ path: 'about', component: AboutUsContainer }
];



@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})

export class AppRouterModule{}