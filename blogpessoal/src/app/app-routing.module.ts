import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
import { CadastroComponent } from './cadastro/cadastro.component';
import { DeletePostagemComponent } from './delete-postagem/delete-postagem.component';
import { DeleteTemaComponent } from './delete-tema/delete-tema.component';
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
<<<<<<< HEAD
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
=======
import { PutPostagemComponent } from './put-postagem/put-postagem.component';
import { PutTemaComponent } from './put-tema/put-tema.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'feed', component: FeedComponent},
  { path: 'login', component: LoginComponent},
  { path: 'cadastro', component: CadastroComponent},
  { path: 'cadastro-tema', component: PostarTemaComponent},
  { path: 'editar-post/:id', component: PutPostagemComponent},
  { path: 'delete-post/:id', component: DeletePostagemComponent},
  { path: 'editar-tema/:id', component: PutTemaComponent},
  { path: 'delete-tema/:id', component: DeleteTemaComponent}
>>>>>>> blogpessoal1.0.16
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
