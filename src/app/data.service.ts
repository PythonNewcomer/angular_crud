import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get('http://localhost:4200/api/products')
  }
  getCustomers() {
    return this.http.get('http://localhost:4200/api/customers')
  }
}
