import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';
<<<<<<< HEAD
=======
>>>>>>> 584b50bd109540b94073c5c187ac79d324993cfa
=======
import { FormsModule } from '@angular/forms';
import { OrderModule } from 'ngx-order-pipe';
<<<<<<< HEAD
>>>>>>> blogpessoal1.0.14
=======
import { ModalModule } from 'ngx-bootstrap/modal';
>>>>>>> blogpessoal1.0.16

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FeedComponent } from './feed/feed.component';
import { PerfilLateralComponent } from './perfil-lateral/perfil-lateral.component';
<<<<<<< HEAD
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
<<<<<<< HEAD
=======
>>>>>>> 584b50bd109540b94073c5c187ac79d324993cfa
=======
import { PostarTemaComponent } from './postar-tema/postar-tema.component';
<<<<<<< HEAD
>>>>>>> blogpessoal1.0.14
=======
import { PutPostagemComponent } from './put-postagem/put-postagem.component';
import { PutTemaComponent } from './put-tema/put-tema.component';
import { DeleteTemaComponent } from './delete-tema/delete-tema.component';
import { DeletePostagemComponent } from './delete-postagem/delete-postagem.component';
import { AlertasComponent } from './alertas/alertas.component';
>>>>>>> blogpessoal1.0.16

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    FeedComponent,
<<<<<<< HEAD
    PerfilLateralComponent,
    LoginComponent,
<<<<<<< HEAD
    CadastroComponent
=======
    PerfilLateralComponent
>>>>>>> 584b50bd109540b94073c5c187ac79d324993cfa
=======
    CadastroComponent,
<<<<<<< HEAD
    PostarTemaComponent
>>>>>>> blogpessoal1.0.14
=======
    PostarTemaComponent,
    PutPostagemComponent,
    PutTemaComponent,
    DeleteTemaComponent,
    DeletePostagemComponent,
    AlertasComponent
>>>>>>> blogpessoal1.0.16
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    FontAwesomeModule,
<<<<<<< HEAD
    HttpClientModule    
=======
    FontAwesomeModule
>>>>>>> 584b50bd109540b94073c5c187ac79d324993cfa
=======
    HttpClientModule,  
    FormsModule,  
<<<<<<< HEAD
    OrderModule 
>>>>>>> blogpessoal1.0.14
=======
    OrderModule,
    ModalModule.forRoot()
>>>>>>> blogpessoal1.0.16
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }