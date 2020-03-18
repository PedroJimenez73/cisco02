import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BypassService {

  private actFinalizadaIn: BehaviorSubject<any> = new BehaviorSubject<any>({actFinalizada: true, nuevoIntento: false});

  actividadFinalizada$: Observable<any> = this.actFinalizadaIn.asObservable();

  constructor() { }

  setActFinalizadaFalse() {
    this.actFinalizadaIn.next({actFinalizada: false, nuevoIntento: false});
  }

  setActFinalizadaTrue() {
    this.actFinalizadaIn.next({actFinalizada: true, nuevoIntento: true});
  }
  
}
