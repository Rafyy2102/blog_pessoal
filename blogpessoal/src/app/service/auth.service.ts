import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';

@Injectable({ providedIn: 'root'})

export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router
    ) { }

  logar(userLogin: UserLogin) : Observable<UserLogin>{
    return this.http.post<UserLogin>('http://localhost:9000/usuarios/logar', userLogin)
  }

  cadastrar(user: User) : Observable<User>{
    return this.http.post<User>('http://localhost:9000/usuarios/cadastrar', user)
  }

  btnSair(){
    let ok = false    

    if (environment.token != '') { ok = true  
      this.router.navigate(['/logar'])} return ok }
    

  logado() {
    let ok: boolean = false 
    if (environment.token != '') { ok = true } return ok }

  btnLogin() {
    let ok = false
    let token = environment.token  
    if (token == '') { ok = true } return ok }
}