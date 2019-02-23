import { Component, OnInit } from '@angular/core';
import {ProductService} from '../shared/product/product.service';
import {Product} from '../model/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];
  //private products: any;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getAll()
      .subscribe(data => {
        this.products = data.result;
      });
  }

  deleteProduct(product: Product): void {
    this.productService.remove(product.id)
      .subscribe( data => {
        this.products = this.products.filter(p => p !== product);
      });
  }
}
