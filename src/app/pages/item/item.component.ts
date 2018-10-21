import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ItemProducto } from '../../interfaces/item.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styles: []
})
export class ItemComponent implements OnInit {

  itemProducto: ItemProducto;
  id: string;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _productoService: ProductosService
  ) {

    this._activatedRoute.params.subscribe( params => {

      this.id = params['id'];

        this._productoService.obtenerProducto( params['id'] )
            .subscribe( (data: ItemProducto) => {

              this.itemProducto = data;
            });

    });
  }

  ngOnInit() {
  }

}
