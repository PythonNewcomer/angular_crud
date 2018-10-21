import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})

export class UpdateProductComponent implements OnInit {

  title = 'updateProduct';

  product$: Object;

  constructor(private route: ActivatedRoute, private router:Router, private data: DataService) {
     this.route.params.subscribe( params => this.product$ = params.id );
  }

  ngOnInit() {
    this.data.getProduct(this.product$).subscribe(
      data => this.product$ = data
    );
  }

  onSubmit(name, price) {
    this.data.updateProduct(this.product$, name, price).subscribe(
      res => console.log('Done'));
      this.router.navigateByUrl("/products");
  }

}
