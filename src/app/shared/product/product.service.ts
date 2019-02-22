import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Product {
  id: number;
  name: string;
  amount: number;
  unit: string;
  }

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  public API = 'http://localhost:8080';
  public PRODUCT_API = this.API + '/api/product/';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Product>(this.PRODUCT_API);
  }

  getProductById(id: number) {
    return this.http.get(this.PRODUCT_API + id);
  }

  createProduct(product: Product) {
    return this.http.post<Product>(this.PRODUCT_API, product);
  }

  updateProduct(product: Product) {
    return this.http.put<Product>(this.PRODUCT_API + product.id, product);
  }

  remove(id: number) {
    return this.http.delete(this.PRODUCT_API + id);
  }

}
