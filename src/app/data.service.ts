import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get('http://localhost:4200/api/products')
  }
  getProduct(id) {
    return this.http.get('http://localhost:4200/api/products/' + id)
  }
  getCustomers() {
    return this.http.get('http://localhost:4200/api/customers')
  }
  getCustomer(id) {
    return this.http.get('http://localhost:4200/api/customers/' + id)
  }
  deleteProduct(product) {
    return this.http.delete('http://localhost:4200/api/products/' + product.id)
  }
  deleteCustomer(customer) {
    return this.http.delete('http://localhost:4200/api/customers/' + customer.id)
  }
}
