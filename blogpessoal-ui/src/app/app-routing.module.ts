import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { DeletePostagemComponent } from './delete-postagem/delete-postagem.component';
import { DeleteTemaComponent } from './delete-tema/delete-tema.component';
import { FeedComponent } from './feed/feed.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PostarTemaComponent } from './postar-tema/postar-tema.component';
import { PutPostagemComponent } from './put-postagem/put-postagem.component';
import { PutTemaComponent } from './put-tema/put-tema.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},

  { path: 'login', component: LoginComponent},
  { path: 'cadastro', component: CadastroComponent},
  { path: 'home', component: HomeComponent},
  { path: 'feed', component: FeedComponent}, 
  { path: 'cadastro-tema', component: PostarTemaComponent},
  { path: 'editar-post/:id', component: PutPostagemComponent},
  { path: 'delete-post/:id', component: DeletePostagemComponent},
  { path: 'editar-tema/:id', component: PutTemaComponent},
  { path: 'delete-tema/:id', component: DeleteTemaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }