import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Localizacao} from './localizacao';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LocalizacaoService {
  apiUrl: string = "";
  constructor(private httpClient: HttpClient) { 
    this.apiUrl = environment.apiUrl + "Localizacoes";
  }

  createLocalizacao(localizacaoBody: any): Observable<Localizacao>{
    console.log(localizacaoBody);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        // Adicione outros cabeçalhos, como autorização, se necessário.
      })
    };
    return this.httpClient.post<Localizacao>(this.apiUrl, localizacaoBody, httpOptions); //return an observable
  }


  updateLocalizacao(id: number, localizacaoBody: any): Observable<Localizacao>{
    return this.httpClient.put<Localizacao>(this.apiUrl + "/" + id, localizacaoBody); //return an observable
  }

  deleteLocalizacao(id: number): Observable<Localizacao>{
    return this.httpClient.delete<Localizacao>(this.apiUrl + "/" + id); //return an observable
  }

  getLocalizacao(id: number): Observable<Localizacao>{
    return this.httpClient.get<Localizacao>(this.apiUrl + "/" + id ); //return an observable
    
  }

  getAllLocalizacoes(): Observable<Localizacao[]>{
    console.log(this.apiUrl);

    return this.httpClient.get<Localizacao[]>(this.apiUrl); //return an observable
}
}