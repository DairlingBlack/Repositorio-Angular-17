import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { InfoPaginaService } from './services/info-pagina.service';
import { HttpClientModule } from '@angular/common/http';
import 'animate.css';
import { ProductosService } from './services/productos.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [InfoPaginaService, ProductosService]
})
export class AppComponent {

  constructor (public InfoPaginaService:InfoPaginaService, public productosService:ProductosService) {

  }

}
