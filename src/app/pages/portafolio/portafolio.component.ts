import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { Producto } from 'src/app/interfaces/producto.interface';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styles: []
})
export class PortafolioComponent implements OnInit {

  productos: Producto[] = [];
  cargando = true;

  constructor(
    private _productosService: ProductosService
  ) {

    this._productosService.cargarProductos()
        .subscribe( (productosD: Producto[]) => {

          this.productos = productosD;
          this.cargando = false;

        });

  }

  ngOnInit() {
  }

}
