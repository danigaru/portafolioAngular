import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor(
    public infoPagina: InfoPaginaService,
    private _router: Router
  ) {
  }

  ngOnInit() {
  }

  buscarProducto( texto: string ) {

    if ( texto.length < 1 ) {
          return;
    }
    this._router.navigate(['/search', texto]);

  }

}
