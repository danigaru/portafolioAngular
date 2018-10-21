import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Portafolio } from '../interfaces/info.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: Portafolio[] = [];

  cargada = false;

  angularUrl = 'https://angular-html-833dd.firebaseio.com/equipo.json';

  constructor(
    private _httpClient: HttpClient
  ) {

    // leer el archivo json

    this._httpClient.get('assets/data/data-pagina.json')
          .subscribe( (data: Portafolio[]) => {
            this.cargada = true;
            this.info = data;
          });

  }

   cargarEquipo() {

    return this._httpClient.get( this.angularUrl );

  }


}
