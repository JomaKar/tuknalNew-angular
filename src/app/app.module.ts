import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRouterModule } from './router.module';

import { AgmCoreModule } from 'angular2-google-maps/core';

import { noMoreGrowDirective } from './directives/noMoreGrow.dir';
import { correctElementHightOnGridDirective } from './directives/elHighOnGrid.dir';



import { AppComponent } from './app.component';

import { MainContainer } from './mainContainer/mainContainer.cmp';
import { AboutUsContainer } from './aboutUsContainer/about.cmp';


import { IntroductionTuknal } from './introHead/intro.cmp';
import { TopMenu } from './headerMenu/menu.cmp';
import { ServiciosTuknal } from './serviciosTK/serviciosSec.cmp';
import { ClientsTuKnal } from './clients/client.cmp';
import { ContactTuKnal } from './contact/contact.cmp';
import { BottomFooter } from './footer/footer.cmp';

import { OrangeLine } from './orangeLine/orangeLine.cmp';


@NgModule({
  declarations: [
    noMoreGrowDirective,
    correctElementHightOnGridDirective,
    AppComponent,
    MainContainer,
    IntroductionTuknal,
    TopMenu,
    ServiciosTuknal,
    ClientsTuKnal,
    ContactTuKnal,
    BottomFooter,
    OrangeLine,
    AboutUsContainer
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
