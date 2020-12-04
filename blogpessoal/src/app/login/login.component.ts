import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';

import { faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { faKey } from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html', 
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //userLogin: UserLogin = new UserLogin()

  faUserAlt = faUserAlt
  faKey = faKey

  constructor(
    //private authService: AuthService,
   // private router: Router

  ) { }

  ngOnInit(): void{
  }

  /*entrar() {
    this.authService.logar(this.userLogin).subscribe((resp: UserLogin) => {
      this.userLogin = resp      
      this.router.navigate(['/feed'])
    })
  }  */   
}