import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit { 

  constructor(private route:ActivatedRoute,
    public productosService: ProductosService){}

  ngOnInit(){
    this.route.params
    .subscribe(params => {
      console.log(params['termino']);
      this.productosService.productosFiltrado[params['termino']];

    });
  
  }

}
