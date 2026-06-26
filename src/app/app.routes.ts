import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home-component/home-component';
import { NavbarComponent } from './core/navbar-component/navbar-component';
import { HeroComponent } from './components/hero-component/hero-component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    }
];
