import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { CustomersComponent } from './customers/customers.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  {
    path: 'main',
    component: MainPageComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'products/:id',
    component: ProductDetailComponent
  },
  {
    path: 'products/create/new',
    component: CreateProductComponent
  },
  {
    path: 'products/update/:id',
    component: UpdateProductComponent
  },
  {
    path: 'customers',
    component: CustomersComponent
  },
  {
    path: 'customers/:id',
    component: CustomerDetailComponent
  },
  {
    path: 'customers/create/new',
    component: CreateCustomerComponent
  },
  {
    path: 'customers/update/:id',
    component: UpdateCustomerComponent
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
