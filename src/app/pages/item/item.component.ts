import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { productoDescripcion } from '../../interfaces/producto-descripcion.interface';


@Component({
  selector: 'app-item',
  standalone: true,
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent implements OnInit{

  productos:productoDescripcion = {};
  id:any;

  constructor(private route:ActivatedRoute, 
    public productosService: ProductosService){}

ngOnInit(){
  this.route.params
  .subscribe(parametros => {
    //console.log(parametros['id'])
    this.productosService.getProducto(parametros['id'])
    .subscribe( Productos => {
      this.id = parametros['id'];
      this.productos=Productos;
    });
  });

}
}
