import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Categoria} from './categoria';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  apiUrl: string = "";
  constructor(private httpClient: HttpClient) { 
    this.apiUrl = environment.apiUrl + "Categorias";
  }

  createCategoria(categoriaBody: any): Observable<Categoria>{
    console.log(categoriaBody);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        // Adicione outros cabeçalhos, como autorização, se necessário.
      })
    };
    return this.httpClient.post<Categoria>(this.apiUrl, categoriaBody, httpOptions); //return an observable
  }


  updateCategoria(id: number, categoriaBody: any): Observable<Categoria>{
    return this.httpClient.put<Categoria>(this.apiUrl + "/" + id, categoriaBody); //return an observable
  }

  deleteCategoria(id: number): Observable<Categoria>{
    return this.httpClient.delete<Categoria>(this.apiUrl + "/" + id); //return an observable
  }

  getCategoria(id: number): Observable<Categoria>{
    return this.httpClient.get<Categoria>(this.apiUrl + "/" + id ); //return an observable
  }

  getAllCategorias(): Observable<Categoria[]>{
    console.log(this.apiUrl);

    return this.httpClient.get<Categoria[]>(this.apiUrl); //return an observable
}
}
