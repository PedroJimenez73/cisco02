import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './comunes/footer/footer.component';
import { HeaderComponent } from './comunes/header/header.component';
import { PortadaComponent } from './contenido/portada/portada.component';
import { Diapo1Component } from './contenido/diapo1/diapo1.component';
import { Diapo2Component } from './contenido/diapo2/diapo2.component';
import { Diapo3Component } from './contenido/diapo3/diapo3.component';
import { LoadDirective } from './directivas/load.directive';
import { PantallaComponent } from './pantalla/pantalla.component';
import { Diapo4Component } from './contenido/diapo4/diapo4.component';
import { Diapo5Component } from './contenido/diapo5/diapo5.component';
import { Diapo6Component } from './contenido/diapo6/diapo6.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    PortadaComponent,
    Diapo1Component,
    LoadDirective,
    PantallaComponent,
    Diapo2Component,
    Diapo3Component,
    Diapo4Component,
    Diapo5Component,
    Diapo6Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ 
    PortadaComponent, 
    Diapo1Component,
    Diapo2Component,
    Diapo3Component,
    Diapo4Component,
    Diapo5Component,
    Diapo6Component
  ]
})
export class AppModule { }
