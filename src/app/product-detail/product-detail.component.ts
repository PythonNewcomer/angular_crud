import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product$: Object;

  constructor(private route: ActivatedRoute, private router:Router, private data: DataService) {
     this.route.params.subscribe( params => this.product$ = params.id );
  }

  ngOnInit() {
    this.data.getProduct(this.product$).subscribe(
      data => this.product$ = data
    );
  }

  deleteProduct() {
    this.data.deleteProduct(this.product$).subscribe(
      data => this.product$ = data
    );
    this.router.navigateByUrl("/products");
}

}
