import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { CustomersComponent } from './customers/customers.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';


const routes: Routes = [
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'products/:id',
    component: ProductDetailComponent
  },
  {
    path: 'customers',
    component: CustomersComponent
  },
  {
    path: 'customers/:id',
    component: CustomerDetailComponent
  }
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
