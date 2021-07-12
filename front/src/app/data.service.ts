import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


interface Filmes{
    nome: string,
    ano:number,
    diretor:string,
    genero: string,
    descricao: string,
    poster: string
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  public buscarfilmes(){

   return this.http.get<Filmes>('http://localhost:3000/filmes')
  }



}
