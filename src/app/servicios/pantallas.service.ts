import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Pantalla } from '../modelos/pantalla.model';
import { PortadaComponent } from '../contenido/portada/portada.component';
import { Diapo1Component } from '../contenido/diapo1/diapo1.component';
import { Diapo2Component } from '../contenido/diapo2/diapo2.component';
import { Diapo3Component } from '../contenido/diapo3/diapo3.component';
import { Diapo4Component } from '../contenido/diapo4/diapo4.component';
import { Diapo5Component } from '../contenido/diapo5/diapo5.component';
import { Diapo6Component } from '../contenido/diapo6/diapo6.component';
import { Diapo7Component } from '../contenido/diapo7/diapo7.component';
import { Diapo9Component } from '../contenido/diapo9/diapo9.component';
import { Diapo8Component } from '../contenido/diapo8/diapo8.component';
import { Diapo10Component } from '../contenido/diapo10/diapo10.component';
import { Diapo12Component } from '../contenido/diapo12/diapo12.component';
import { Diapo11Component } from '../contenido/diapo11/diapo11.component';
import { Diapo13Component } from '../contenido/diapo13/diapo13.component';
import { Diapo14Component } from '../contenido/diapo14/diapo14.component';
import { Diapo18Component } from '../contenido/diapo18/diapo18.component';
import { Diapo15Component } from '../contenido/diapo15/diapo15.component';
import { Diapo16Component } from '../contenido/diapo16/diapo16.component';
import { Diapo17Component } from '../contenido/diapo17/diapo17.component';
import { Diapo19Component } from '../contenido/diapo19/diapo19.component';
import { Diapo20Component } from '../contenido/diapo20/diapo20.component';
import { Diapo21Component } from '../contenido/diapo21/diapo21.component';
import { Diapo22Component } from '../contenido/diapo22/diapo22.component';
import { Diapo23Component } from '../contenido/diapo23/diapo23.component';
import { Diapo24Component } from '../contenido/diapo24/diapo24.component';
import { Diapo25Component } from '../contenido/diapo25/diapo25.component';
import { Diapo26Component } from '../contenido/diapo26/diapo26.component';

declare var window: any;

@Injectable({
  providedIn: 'root'
})

export class PantallasService {

  currentPage: any = 0;
  private indiceIn = new BehaviorSubject<any>({indice: 0, total: 0});
  pantallas = [
    new Pantalla(PortadaComponent, {titulo: "Evaluaciones Cisco"}),
    new Pantalla(Diapo1Component, {titulo: "Preguntas de autocomprobación"}),
    new Pantalla(Diapo2Component, {titulo: "Preguntas de autocomprobación"}),
    new Pantalla(Diapo3Component, {titulo: "Preguntas de autocomprobación"}),
    new Pantalla(Diapo4Component, {titulo: "Preguntas de autocomprobación"}),
    new Pantalla(Diapo5Component, {titulo: "Preguntas de autocomprobación"}),
    new Pantalla(Diapo6Component, {titulo: "Preguntas de autocomprobación"}),
    new Pantalla(Diapo7Component, {titulo: "Preguntas de autocomprobación"}),
    new Pantalla(Diapo8Component, {titulo: "Preguntas de autocomprobación"}),
    new Pantalla(Diapo9Component, {titulo: "Preguntas de autocomprobación"}),
    new Pantalla(Diapo10Component, {titulo: "Preguntas de autocomprobación"}),
    new Pantalla(Diapo11Component, {titulo: "Preguntas de autocomprobación"}),
    new Pantalla(Diapo12Component, {titulo: "Preguntas de autocomprobación"}),
    new Pantalla(Diapo13Component, {titulo: "Preguntas de autocomprobación"}),
    new Pantalla(Diapo14Component, {titulo: "Preguntas de autocomprobación"}),
    new Pantalla(Diapo15Component, {titulo: "Preguntas de autocomprobación"}),
    new Pantalla(Diapo16Component, {titulo: "Preguntas de autocomprobación"}),
    new Pantalla(Diapo17Component, {titulo: "Preguntas de autocomprobación"}),
    new Pantalla(Diapo18Component, {titulo: "Preguntas de autocomprobación"}),
    new Pantalla(Diapo19Component, {titulo: "Preguntas de autocomprobación"}),
    new Pantalla(Diapo20Component, {titulo: "Preguntas de autocomprobación"}),
    new Pantalla(Diapo21Component, {titulo: "Preguntas de autocomprobación"}),
    new Pantalla(Diapo22Component, {titulo: "Preguntas de autocomprobación"}),
    new Pantalla(Diapo23Component, {titulo: "Preguntas de autocomprobación"}),
    new Pantalla(Diapo24Component, {titulo: "Preguntas de autocomprobación"}),
    new Pantalla(Diapo25Component, {titulo: "Preguntas de autocomprobación"}),
    new Pantalla(Diapo26Component, {titulo: "Preguntas de autocomprobación"}),
  ];

  get indice() {
    return this.indiceIn.asObservable();
  }

  constructor() { 
    setTimeout(()=> {
      if(window.ScormProcessGetValue("cmi.location", false)){
        this.currentPage = window.ScormProcessGetValue("cmi.location", false);
        this.navToPage();
      }
    }, 500);
  }

  getPantallas() {
    return this.pantallas;
  }

  nextPage() {
    this.currentPage++;
    this.navToPage();
  }

  prevPage() {
    this.currentPage--;
    this.navToPage();
  }

  navFromMenu(e) {
    this.currentPage = e;
    this.navToPage();
  }
  
  navToPage() {
    this.indiceIn.next({indice: this.currentPage, total: this.pantallas.length});
    window.ScormProcessSetValue('cmi.location', (this.currentPage).toString());
    if (this.currentPage === (this.pantallas.length - 1)){
        // reachedEnd = true;
        window.ScormProcessSetValue("cmi.completion_status", "completed");
    }
  }

  exit() {
    window.open(window.location, '_self').close();
    window.ScormProcessSetValue("cmi.exit", "suspend");
  }

}
