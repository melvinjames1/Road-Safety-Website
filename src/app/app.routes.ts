import { Routes } from '@angular/router';
import path from 'path';
import { HomeComponent } from './home/home.component';
import { BikesComponent } from './bikes/bikes.component';
import { CarsComponent } from './cars/cars.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';

export const routes: Routes = [
     {'path': 'navbar', component: NavbarComponent},
     {'path': '', component: HomeComponent},
     {'path': 'bikes', component: BikesComponent},
     {'path': 'cars', component: CarsComponent},
     {'path':'about',component: AboutComponent}
];