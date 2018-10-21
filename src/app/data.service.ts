import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get('http://localhost:4200/api/products');
  }

  getProduct(id) {
    return this.http.get('http://localhost:4200/api/products/' + id);
  }

  getCustomers() {
    return this.http.get('http://localhost:4200/api/customers');
  }

  getCustomer(id) {
    return this.http.get('http://localhost:4200/api/customers/' + id);
  }

  deleteProduct(product) {
    return this.http.delete('http://localhost:4200/api/products/' + product.id);
  }

  deleteCustomer(customer) {
    return this.http.delete('http://localhost:4200/api/customers/' + customer.id);
  }

  addProduct(name, price) {
    const product = {
      name: name,
      price: price
    };
    return this.http.post('http://localhost:4200/api/products', product);
  }

  addCustomer(name, address, phone) {
    const customer = {
      name: name,
      address: address,
      phone: phone
    };
    return this.http.post('http://localhost:4200/api/customers', customer);
  }

  updateProduct(product, name, price) {
    const newProduct = {
      name: name,
      price: price
    };
    return this.http.put('http://localhost:4200/api/products/' + product.id, newProduct);
  }

  updateCustomer(customer, name, address, phone) {
    const newCustomer = {
      name: name,
      address: address,
      phone: phone
    };
    return this.http.put('http://localhost:4200/api/customers/' + customer.id, newCustomer);
  }

}
