import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { TopBarComponent } from './navigationBar/top-bar/top-bar.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
    // {path:"login" , component:LoginComponent}, 
    {path:"" , component:AppComponent},
    {path:"login",component:LoginComponent},
    {path:"home",component:HomeComponent},
    {path:"cart",component:CartComponent}
];
