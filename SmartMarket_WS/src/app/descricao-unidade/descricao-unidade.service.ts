import { Injectable } from '@angular/core';
import {DescricaoUnidade} from './descricao-unidade';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DescricaoUnidadeService {
  apiUrl: string = "";
  constructor(private httpClient: HttpClient) { 
    this.apiUrl = environment.apiUrl + "DescricaoUnidade";
  }

  createDescricaoUnidade(descricaoUnidadeBody: any): Observable<DescricaoUnidade>{
    console.log(descricaoUnidadeBody);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        // Adicione outros cabeçalhos, como autorização, se necessário.
      })
    };
    return this.httpClient.post<DescricaoUnidade>(this.apiUrl, descricaoUnidadeBody, httpOptions); //return an observable
  }


  updateDescricaoUnidade(id: number, descricaoUnidadeBody: any): Observable<DescricaoUnidade>{
    return this.httpClient.put<DescricaoUnidade>(this.apiUrl + "/" + id, descricaoUnidadeBody); //return an observable
  }

  deleteDescricaoUnidade(id: number): Observable<DescricaoUnidade>{
    return this.httpClient.delete<DescricaoUnidade>(this.apiUrl + "/" + id); //return an observable
  }

  getDescricaoUnidade(id: number): Observable<DescricaoUnidade>{
    return this.httpClient.get<DescricaoUnidade>(this.apiUrl + "/" + id ); //return an observable
  }

  getAllDescricaoUnidade(): Observable<DescricaoUnidade[]>{
    console.log(this.apiUrl);
    return this.httpClient.get<DescricaoUnidade[]>(this.apiUrl); //return an observable
}
}
