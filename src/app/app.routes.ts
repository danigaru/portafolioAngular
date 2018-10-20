import { Routes, RouterModule } from '@angular/router';

// components
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';

const APP_ROUTES: Routes = [

    { path: 'portafolio', component: PortafolioComponent },
    { path: 'about', component: AboutComponent },
    { path: 'item', component: ItemComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'portafolio' }

];

export const APP_ROUTING =  RouterModule.forRoot( APP_ROUTES, { useHash: true } );
