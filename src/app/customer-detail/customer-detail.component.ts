import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  customer$: Object;

  constructor(private route: ActivatedRoute, private router:Router, private data: DataService) {
     this.route.params.subscribe( params => this.customer$ = params.id );
  }

  ngOnInit() {
    this.data.getCustomer(this.customer$).subscribe(
      data => this.customer$ = data
    );
  }

  deleteCustomer() {
    this.data.deleteCustomer(this.customer$).subscribe(
      data => this.customer$ = data
    );
    this.router.navigateByUrl("/customers");
}

}
