import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PantallasService } from 'src/app/servicios/pantallas.service';
import { BypassService } from 'src/app/servicios/bypass.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  currentPantallaIndex = 0;
  total = 0;
  subscripIndice: Subscription;
  actFinalizada: false;
  nuevoIntento: false;
  subscripActFinalizada: Subscription;
  
  constructor(private pantallasService: PantallasService,
              private bypassService: BypassService) { }

  ngOnInit() {
    this.subscripIndice = this.pantallasService.indice
                                  .subscribe(
                                    (data: any) => {
                                      this.currentPantallaIndex = data.indice;
                                      this.total = (data.total - 1) 
                                    },
                                    (error:any) => {console.log(error)
                                  });
    this.subscripActFinalizada = this.bypassService.actividadFinalizada$
                                  .subscribe(
                                    (data: any) => {
                                      this.actFinalizada = data.actFinalizada;
                                      this.nuevoIntento = data.nuevoIntento;
                                    },
                                    (error:any) => {console.log(error)
                                  });
  }

  prevPantalla() {
    this.nuevoIntento = false;
    this.pantallasService.prevPage()
  }

  nextPantalla() {
    this.nuevoIntento = false;
    this.pantallasService.nextPage()
  }

  doAgain() {
    this.nuevoIntento = false;
    this.pantallasService.navFromMenu(1);
  }

  exit() {
    this.pantallasService.exit();
  }

}
