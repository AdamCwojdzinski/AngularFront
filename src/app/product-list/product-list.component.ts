import { Component, OnInit } from '@angular/core';
import {ProductService} from '../shared/product/product.service';
import {Product} from '../model/product.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  private products: Product[] = [];
  private productsObservable: Observable<any> ;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getAll()
      .subscribe((res: Product[]) => {
        this.products = res;
        console.log(res);
      });
  }

  deleteProduct(product: Product): void {
    this.productService.remove(4)
      .subscribe( data => {
        this.products = this.products.filter(p => p !== product);
        alert('Produkt usunięto');
      });
  }
}
