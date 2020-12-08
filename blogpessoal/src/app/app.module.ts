import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';
=======
>>>>>>> 584b50bd109540b94073c5c187ac79d324993cfa

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
=======
>>>>>>> 584b50bd109540b94073c5c187ac79d324993cfa

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
    CadastroComponent
=======
    PerfilLateralComponent
>>>>>>> 584b50bd109540b94073c5c187ac79d324993cfa
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    FontAwesomeModule,
    HttpClientModule    
=======
    FontAwesomeModule
>>>>>>> 584b50bd109540b94073c5c187ac79d324993cfa
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
