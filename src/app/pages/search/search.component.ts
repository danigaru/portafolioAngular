import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  cargando = true;
  productos: any;
  productosFiltrado: any[] = [];
  termino: string;

  constructor(
    private _activatedRoute: ActivatedRoute,
    public _productoService: ProductosService
  ) {
  }

  ngOnInit() {

    this._activatedRoute.params.subscribe( params => {

     this.termino = params['termino'];
     this.termino = this.termino.toLowerCase();

      this._productoService.buscarProducto( )
        .subscribe( data => {

          this.productos = data;
          this.productosFiltrado = [];

          this.productos.forEach( prod => {

            const tituloLower = prod['titulo'].toLowerCase();

             if ( prod['categoria'].indexOf( this.termino ) >= 0 || tituloLower.indexOf( this.termino ) >= 0  ) {

               this.productosFiltrado.push( prod );
               this.cargando = false;

             }

          });

        });
   });
  }

}
