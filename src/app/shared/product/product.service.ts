import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Product} from '../../model/product.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  public PRODUCT_API = '/api';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(this.PRODUCT_API);
  }

  getProductById(id: number) {
    return this.http.get(this.PRODUCT_API + '/' + id);
  }

  createProduct(product: Product) {
    return this.http.post(this.PRODUCT_API, product);
  }

  updateProduct(product: Product) {
    return this.http.put(this.PRODUCT_API + '/' + product.id, product);
  }

  remove(id: number) {
    return this.http.delete(this.PRODUCT_API + '/' + id);
  }

  getProductByName(name: string): Observable<any> {
    name = name.trim();
    const options = name ?
      { params: new HttpParams().set('name', name) } : {};
    return this.http.get(this.PRODUCT_API + '/search', options);
  }
}
