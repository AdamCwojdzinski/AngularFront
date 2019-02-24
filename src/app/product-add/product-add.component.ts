import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../shared/product/product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private productService: ProductService) { }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.required],
      amount: ['', Validators.required],
      unit: ['', Validators.required],
    });
  }

  onSubmit() {
    this.productService.createProduct(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['home']);
        alert('Dodano nowy produkt');
      });
  }

}
