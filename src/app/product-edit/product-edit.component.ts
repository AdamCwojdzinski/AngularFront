import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductService, Product} from '../shared/product/product.service';

import {first} from 'rxjs/operators';
import {Router,  ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: Product;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private productService: ProductService) { }

  ngOnInit() {
    let productId = window.localStorage.getItem('editProductId');
    if (!productId) {
      alert('Brak takiego produktu')
      this.router.navigate(['home']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      amount: ['', Validators.required],
      unit: ['', Validators.required]
    });
    this.productService.getProductById(+productId)
      .subscribe( data => {
        this.editForm.setValue(data);
      });
  }

  onSubmit() {
    this.productService.updateProduct(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          if (data.status === 200) {
            alert('User updated successfully.');
            this.router.navigate(['home']);
          } else {
            alert();
          }
        },
        error => {
          alert(error);
        });
  }

}
