import { Routes } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { SearchComponent } from './pages/search/search.component';

export const routes: Routes = [
    {path:'', component: PortafolioComponent},
    {path:'about', component: AboutComponent},
    {path:'item/:id', component: ItemComponent},
    {path:'search/:termino', component: SearchComponent},
    {path: '**',   redirectTo: '', pathMatch: 'full'}
];