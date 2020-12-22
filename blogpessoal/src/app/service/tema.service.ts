import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token')!)
  }

  getAllTemas() : Observable<Tema[]>{
    return this.http.get<Tema[]>('http://localhost:9000/tema', this.token)
  }

  getByIdTema(id: number) : Observable<Tema>{
    return this.http.get<Tema>(`http://localhost:9000/tema/${id}`, this.token)
  }

  getByNomeTema(nome: string) : Observable<Tema[]>{
    return this.http.get<Tema[]>(`http://localhost:9000/tema/nome/${nome}`, this.token)
  }

  postTema(tema: Tema) : Observable<Tema>{
    return this.http.post<Tema>('http://localhost:9000/tema', tema, this.token)
  }

  putTema(tema: Tema) : Observable<Tema>{
    return this.http.put<Tema>('http://localhost:9000/tema', tema, this.token)
  }

  deleteTema(id: number){
    return this.http.delete(`http://localhost:9000/tema/${id}`, this.token)
  }
}