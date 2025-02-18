import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { SideBarComponent } from "../side-bar/side-bar.component";
import {MatSidenavModule} from '@angular/material/sidenav';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, SideBarComponent,MatSidenavModule],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss'
})
export class TopBarComponent {
  showFiller = false;

  constructor(    private router: Router,
  ){}


  navigate(BtnValue :string){

    if(BtnValue === 'auth'){
        this.router.navigate(['/login'])
    }
    

  }
}
