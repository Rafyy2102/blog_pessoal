import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
import { CadastroComponent } from './cadastro/cadastro.component';
import { FeedComponent } from './feed/feed.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
<<<<<<< HEAD
=======
import { FeedComponent } from './feed/feed.component';
import { HomeComponent } from './home/home.component';
>>>>>>> 584b50bd109540b94073c5c187ac79d324993cfa
=======
import { PostarTemaComponent } from './postar-tema/postar-tema.component';
>>>>>>> blogpessoal1.0.14

const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path:'home', component: HomeComponent},
<<<<<<< HEAD
  {path: 'feed', component: FeedComponent},
  {path: 'login', component: LoginComponent},
<<<<<<< HEAD
  {path: 'cadastro', component: CadastroComponent}
=======
  {path: 'feed', component: FeedComponent}
>>>>>>> 584b50bd109540b94073c5c187ac79d324993cfa
=======
  {path: 'cadastro', component: CadastroComponent},
  {path: 'cadastro-tema', component: PostarTemaComponent}
>>>>>>> blogpessoal1.0.14
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
<<<<<<< HEAD
export class AppRoutingModule { }
=======
export class AppRoutingModule { }
>>>>>>> 584b50bd109540b94073c5c187ac79d324993cfa
