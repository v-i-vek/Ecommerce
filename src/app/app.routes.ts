import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { TopBarComponent } from './navigationBar/top-bar/top-bar.component';

export const routes: Routes = [
    {path:"login" , component:LoginComponent},
    {path:"" , component:TopBarComponent},
];
