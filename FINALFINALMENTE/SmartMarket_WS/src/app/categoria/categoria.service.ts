import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Categoria} from './categoria';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  apiUrl: string = '';

  constructor(private httpClient: HttpClient) { 
    this.apiUrl = environment.apiUrl + "Categorias";
  }

  createCategoria(categoriaBody: any): Observable<Categoria>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.httpClient.post<Categoria>(this.apiUrl, categoriaBody, httpOptions);
  }

 getCategoria(id: number): Observable<Categoria>{
  console.log(this.apiUrl + '/' + id);
    return this.httpClient.get<Categoria>(this.apiUrl + "/" + id );
  }

  getAllCategorias(): Observable<Categoria[]>{
    console.log(this.apiUrl);
    return this.httpClient.get<Categoria[]>(this.apiUrl);
}

 deleteCategoria(id: number): Observable<Categoria>{
    return this.httpClient.delete<Categoria>(this.apiUrl + "/" + id);
  }

  updateCategoria(id: number, categoriaBody: any): Observable<Categoria>{
    return this.httpClient.put<Categoria>(this.apiUrl + "/" + id, categoriaBody);
  }

 

 


}