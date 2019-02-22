import { Component, OnInit, Inject } from '@angular/core';
import {Product, ProductService} from '../shared/product/product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getAll()
      .subscribe(data => {
        this.products.push(data as unknown as Product);
      });
  }

  deleteProduct(product: Product): void {
    this.productService.remove(product.id = 14)
      .subscribe( data => {
        this.products = this.products.filter(p => p !== product);
      });
  }
}
