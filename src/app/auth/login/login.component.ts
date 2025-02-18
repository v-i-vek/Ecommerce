import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input'
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule,MatIconModule,MatInputModule,MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  isLogIn = true;
  logSignBTN = "Login"

  constructor(){ 
  }

  isSignIn(){
    if(this.logSignBTN == 'Login'){
      
      this.isLogIn = false;
      this.logSignBTN = "Sign Up" 
    }
    else{
      this.isLogIn = true;
      this.logSignBTN = "Login"
    }
  }
}
