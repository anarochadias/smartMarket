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
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    };
    return this.httpClient.post<DescricaoUnidade>(this.apiUrl, descricaoUnidadeBody, httpOptions);
  }

    getDescricaoUnidade(id: number): Observable<DescricaoUnidade>{
      console.log(this.apiUrl + '/' + id);
    return this.httpClient.get<DescricaoUnidade>(this.apiUrl + "/" + id );
  }

  getAllDescricaoUnidade(): Observable<DescricaoUnidade[]>{
    console.log(this.apiUrl);
    return this.httpClient.get<DescricaoUnidade[]>(this.apiUrl);
}

 deleteDescricaoUnidade(id: number): Observable<DescricaoUnidade>{
    return this.httpClient.delete<DescricaoUnidade>(this.apiUrl + "/" + id);
  }

  updateDescricaoUnidade(id: number, descricaoUnidadeBody: any): Observable<DescricaoUnidade>{
    return this.httpClient.put<DescricaoUnidade>(this.apiUrl + "/" + id, descricaoUnidadeBody);
  }

 




}
