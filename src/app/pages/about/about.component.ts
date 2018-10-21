import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: []
})
export class AboutComponent implements OnInit {

  equipos: any = [];

  constructor(
    private _infoService: InfoPaginaService
  ) {

    this._infoService.cargarEquipo( )
      .subscribe( infoAbout => {
          this.equipos = infoAbout;
      });

  }

  ngOnInit() {
  }

}
