import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Portafolio } from '../interfaces/info.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: Portafolio = {
   'titulo': '',
   'sub_titulo': '',
   'email': '',
   'nombre_corto': '',
   'pagina_autor': '',
   'facebook': '',
   'twitter': '',
   'instagram': '',
   'tublr': '',
   'equipo_trabajo': []
  };

  cargada = false;

  constructor(
    private _httpClient: HttpClient
  ) {

    // leer el archivo json

    this._httpClient.get('src/assets/data/data-pagina.json')
          .subscribe( (data: Portafolio) => {
            this.cargada = true;
            this.info = data;
          });

  }


}
