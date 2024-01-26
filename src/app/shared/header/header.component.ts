import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor (public InfoPaginaService:InfoPaginaService, private Router: Router) {}

  buscarProducto(termino:string){
    if(termino.length < 1){
      return;
    }

    this.Router.navigate(['/search', termino])
    //console.log(termino)
  }

}
