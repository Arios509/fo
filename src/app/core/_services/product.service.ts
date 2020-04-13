import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/app/shared/global';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  onFetchProduct = () => {
    return this.http.get(`${environment.API_SERVER}/api/product`, environment.httpOptions)
  }
}
