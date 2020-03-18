import { Component } from '@angular/core';
import { PantallasService } from './servicios/pantallas.service';
import { Pantalla } from './modelos/pantalla.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  pantallas: Pantalla[];

  constructor(private pantallasService: PantallasService) {}

  ngOnInit() {
    this.pantallas = this.pantallasService.getPantallas();
  }
  
}
