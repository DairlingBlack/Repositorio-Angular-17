import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Productos } from '../interfaces/Producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Productos[] = [];
  productosFiltrado: Productos[] = [];


  constructor( private http: HttpClient ) {

    this.cargarProductos();

  }


  private cargarProductos() {

    return new Promise ((resolve, reject) =>{

    this.http.get('https://angular-html-25cf9.firebaseio.com/productos_idx.json')
        .subscribe( (resp:any) => {
          this.productos = resp;
          this.cargando = false;
          resolve;
        });


    })
  };


  getProducto(id:string){
    return this.http.get(`https://angular-html-7515c-default-rtdb.firebaseio.com/productos/${id}.json`);
  }

  buscarProductos(termino:string){
    if(this.productos.length === 0){
      this.cargarProductos().then(() =>{
        this.filtrarProductos(termino);
      })
    } else {
      this.filtrarProductos(termino);
    }

  }

  private filtrarProductos(termino:string){
//console.log(this.productos);
this.productosFiltrado = [];
termino = termino.toLocaleLowerCase();

this.productos.forEach(prod => {

  const tituloLower = prod.titulo.toLocaleLowerCase();

  if ( prod.categoria.indexOf( termino ) >= 0 || tituloLower.indexOf( termino ) >= 0  ) {
    this.productosFiltrado.push( prod );
  }
})
  }



}