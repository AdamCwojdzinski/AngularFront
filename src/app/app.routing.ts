import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductAddComponent} from './product-add/product-add.component';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductEditComponent} from './product-edit/product-edit.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: ProductListComponent},
  { path: 'addProduct', component: ProductAddComponent },
  { path: 'editProduct', component: ProductEditComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
