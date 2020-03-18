import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { Pantalla } from '../modelos/pantalla.model';
import { LoadDirective } from '../directivas/load.directive';
import { Subscription } from 'rxjs';
import { PantallasService } from '../servicios/pantallas.service';

@Component({
  selector: 'app-pantalla',
  templateUrl: './pantalla.component.html',
  styleUrls: ['./pantalla.component.scss']
})
export class PantallaComponent implements OnInit {

  @Input() pantallas: Pantalla[];
  @ViewChild(LoadDirective, {static: true}) load: LoadDirective;
  currentPantallaIndex = 0;
  subscripIndice: Subscription;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
             private pantallasService: PantallasService) { 

  }

  ngOnInit() {
    this.subscripIndice = this.pantallasService.indice
                                  .subscribe(
                                    (data: any) => {
                                      this.currentPantallaIndex = data.indice;
                                      this.loadComponent();
                                    },
                                    (error:any) => {console.log(error)
                                  });
  }

  ngOnDestroy() {
    // clearInterval(this.interval);
  }

  loadComponent() {
    const pantalla = this.pantallas[this.currentPantallaIndex];
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(pantalla.component);

    const viewContainerRef = this.load.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (componentRef.instance).data = pantalla.data;
  }

}
