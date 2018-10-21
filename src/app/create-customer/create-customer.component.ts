import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  title = 'createCustomer';

  constructor(private route: ActivatedRoute, private router:Router, private data: DataService) {}

  onSubmit(name, address, phone) {
    this.data.addCustomer(name, address, phone).subscribe(
      res => console.log('Done'));
      this.router.navigateByUrl("/customers");
  }

  ngOnInit() {
  }

}
