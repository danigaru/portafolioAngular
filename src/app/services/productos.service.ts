import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
    providedIn: 'root'
})

export class ProductosService {

    productos: Producto[] = [];
    productosFiltrado: Producto[] = [];

    productoUrl = 'https://angular-html-833dd.firebaseio.com';

    constructor(
        private _http: HttpClient
    ) {}

    cargarProductos() {

        const url = `${ this.productoUrl }/productos_idx.json`;

       return this._http.get( url );

    }

    obtenerProducto( id: string ) {

        const url = ` ${ this.productoUrl }/productos/${ id }.json `;

        return this._http.get( url );
    }

    buscarProducto( ) {

        const url = `${ this.productoUrl }/productos_idx.json`;

        return this._http.get( url );
    }

}
