import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PantallasService } from 'src/app/servicios/pantallas.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild('burger', {static: true}) burgerRef: ElementRef;
  @ViewChild('lateral', {static: true}) lateralRef: ElementRef;

  constructor(private pantallasService: PantallasService) { }

  ngOnInit() {
  }

  navTo(e) {
    this.pantallasService.navFromMenu(e);
    this.toggleMenu()
  }

  toggleMenu() {
    if (this.burgerRef.nativeElement.classList.value === 'burger') {
      this.burgerRef.nativeElement.classList.add('abierto')
      this.lateralRef.nativeElement.classList.add('abierto')
    } else {
      this.burgerRef.nativeElement.classList.remove('abierto')
      this.lateralRef.nativeElement.classList.remove('abierto')
    }
  }

}
