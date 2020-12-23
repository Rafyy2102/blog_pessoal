import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faKey } from '@fortawesome/free-solid-svg-icons'
import { faLockOpen } from '@fortawesome/free-solid-svg-icons'
import { AlertasService } from '../service/alertas.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  user: User = new User()
  senha: string
  tipoUse: string

  faUser = faUser
  faEnvelope = faEnvelope
  faKey = faKey
  faLockOpen = faLockOpen

  constructor(
    private authService: AuthService,
    private router: Router,
    private alert: AlertasService
  ) { }

  ngOnInit() {
    window.scroll(0,0)    
  }

  conferirSenha(event: any) {
    this.senha = event.target.value
  }

  tipoUser(event: any){
    this.tipoUse = event.target.value
  }

  cadastrar() {
    this.user.tipo = this.tipoUse

    if (this.senha == this.user.senha) {
      this.authService.cadastrar(this.user).subscribe((resp: User) => {
        this.user = resp
        this.router.navigate(['/login'])
        this.alert.showAlertSuccess('Usuário cadastrado com sucesso!!')
      }, err => {       
        if (err.status == 400) {
          this.alert.showAlertWarning("Usuário já cadastrado")
        }
      })
    } else {
      this.alert.showAlertDanger('A senha não conferem!!')
    }
  }
}