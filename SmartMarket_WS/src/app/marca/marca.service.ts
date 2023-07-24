import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Marca } from './marca';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MarcaService {
  apiUrl: string = '';

  constructor(private httpClient: HttpClient) {
    this.apiUrl = environment.apiUrl + 'Marcas';
  }

  createMarca(marcaBody: any): Observable<Marca> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // Adicione outros cabeçalhos, como autorização, se necessário.
      }),
    };
    return this.httpClient.post<Marca>(this.apiUrl, marcaBody, httpOptions); //return an observable
  }

  getMarca(id: number): Observable<Marca> {
    console.log(this.apiUrl + '/' + id);
    return this.httpClient.get<Marca>(this.apiUrl + '/' + id); //return an observable
  }
  getAllMarcas(): Observable<Marca[]> {
    console.log(this.apiUrl);
    return this.httpClient.get<Marca[]>(this.apiUrl); //return an observable
  }

  deleteLocalizacao(id: number): Observable<Marca>{
    return this.httpClient.delete<Marca>(this.apiUrl + "/" + id); //return an observable
  }

  updateLocalizacao(id: number, localizacaoBody: any): Observable<Marca>{
    return this.httpClient.put<Marca>(this.apiUrl + "/" + id, localizacaoBody); //return an observable
  }
}
