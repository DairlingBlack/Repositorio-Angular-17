import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { infoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  info: infoPagina = {};
  cargada = false;

  equipo: any[] = [];

  constructor(private http: HttpClient) {

    //console.log('informacion lista');
    this.cargarinfo();
    this.cargarEquipo();

  }

  private cargarinfo() {
    
    this.http.get('assets/data/data-pagina.json')
    .subscribe((Resp: infoPagina) => {
      this.cargada = true;
      this.info = Resp;
    });

  }

  private cargarEquipo(){

    this.http.get('https://angular-html-7515c-default-rtdb.firebaseio.com/equipo.json')
    .subscribe((Resp:any) => {

      this.equipo = Resp;
      //console.log(Resp);

    });
  }
}