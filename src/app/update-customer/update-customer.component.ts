import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})

export class UpdateCustomerComponent implements OnInit {

  title = 'updateCustomer';

  customer$: Object;

  constructor(private route: ActivatedRoute, private router:Router, private data: DataService) {
     this.route.params.subscribe( params => this.customer$ = params.id );
  }

  ngOnInit() {
    this.data.getCustomer(this.customer$).subscribe(
      data => this.customer$ = data
    );
  }

  onSubmit(name, address, phone) {
    this.data.updateCustomer(this.customer$,name, address, phone).subscribe(
      res => console.log('Done'));
      this.router.navigateByUrl("/customers");
  }

}
