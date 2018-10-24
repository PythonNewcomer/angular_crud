import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})

export class CustomersComponent implements OnInit {

  title = 'customers';

  customers$: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getCustomers().subscribe(data => this.customers$ = data
    );
  }
}
