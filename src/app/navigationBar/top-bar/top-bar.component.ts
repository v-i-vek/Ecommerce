import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import {MatListModule} from '@angular/material/list';
import { RouterOutlet } from '@angular/router';

  import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ActivatedRoute, Router,RouterLink } from '@angular/router';
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';
import { SideBarComponent } from "../side-bar/side-bar.component";
import { LoginComponent } from '../../auth/login/login.component';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, MatListModule, RouterOutlet,RouterLink],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss'
})
export class TopBarComponent {
  showFiller = false;
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  constructor(private router: Router) {}

  navigate(BtnValue :string){
    if(BtnValue === 'auth'){
        this.router.navigate(['login'])
    }
    

  }
  
}
