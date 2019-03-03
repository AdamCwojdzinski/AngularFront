import { Component, OnInit } from '@angular/core';
import {ProductService} from '../shared/product/product.service';
import {Product} from '../model/product.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
    this.getProduct();
  }

  getProduct(): void {
    this.productService.getAll()
      .subscribe(data => {
        this.products = data,
      console.log(this.products);
      });
  }

  deleteProduct(product: Product): void {
    this.productService.remove(product.id).subscribe(),
        alert('Produkt usunięto'),
      this.getProduct();
  }

  editProduct(product: Product): void {
    window.localStorage.removeItem('editProductId');
    window.localStorage.setItem('editProductId', product.id.toString());
    this.router.navigate(['editProduct']);
  }

  searchProduct(searchTerm: string) {
    this.productService.getProductByName(searchTerm)
        .subscribe(data => {
          this.products = data;
        });
  }
}
