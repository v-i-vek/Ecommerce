import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { TopBarComponent } from './navigationBar/top-bar/top-bar.component';
import { SideBarComponent } from './navigationBar/side-bar/side-bar.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {path:"login" , component:LoginComponent},
    {path:"" , component:AppComponent},
];
