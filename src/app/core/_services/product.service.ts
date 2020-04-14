import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/app/shared/global';
import { Product } from '../_models/product.model';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  onFetchProduct = () => {
    return this.http.get(`${environment.API_SERVER}/api/product`, environment.httpOptions)
  }

  onCreateProduct = (form: Product) => {
    return this.http.post<Product>(`${environment.API_SERVER}/api/product/create`, form,
      environment.httpOptions)
      .pipe(
        map((res: any) => {
          console.log(res)
          return res;
        })
      )
  }
  onFetchProductDetail = (id: string) => {
    return this.http.get(`${environment.API_SERVER}/api/product/detail/` + id, environment.httpOptions)
  }
}
