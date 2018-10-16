import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router:Router, private data: DataService) {}

  onSubmit(name, price) {
    this.data.addProduct(name, price).subscribe(
      res => console.log('Done'));
      this.router.navigateByUrl("/products");
  }

  ngOnInit() {
  }

}
