import { Component, OnInit } from '@angular/core';
import {Product, ProductService} from '../shared/product/product.service';

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
}
