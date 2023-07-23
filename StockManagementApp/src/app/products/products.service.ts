import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Product} from './product';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  apiUrl: string = "";
  constructor(private httpClient: HttpClient) { 
    this.apiUrl = environment.apiUrl + "Product";
  }

  createProduct(productBody: any): Observable<Product>{
    console.log(productBody);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        // Adicione outros cabeçalhos, como autorização, se necessário.
      })
    };
    return this.httpClient.post<Product>(this.apiUrl, productBody, httpOptions); //return an observable
  }


  updateProduct(id: string, productBody: any): Observable<Product>{
    return this.httpClient.put<Product>(this.apiUrl + "/" + id, productBody); //return an observable
  }

  deleteProduct(id: string): Observable<Product>{
    return this.httpClient.delete<Product>(this.apiUrl + "/" + id); //return an observable
  }

  getProduct(id: string): Observable<Product>{
    return this.httpClient.get<Product>(this.apiUrl + "/" + id + "/GetProduct"); //return an observable
  }

  getAllProduct(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.apiUrl); //return an observable
}
}