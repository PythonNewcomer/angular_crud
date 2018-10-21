import {TestBed, async } from '@angular/core/testing';
import { CustomersComponent } from './customers.component';
import { HttpClientModule } from '@angular/common/http';

describe('CustomersComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomersComponent ],
      imports: [ HttpClientModule ],
      providers: [ HttpClientModule ]
    })
    .compileComponents();
  }));


  it('should create', async(() => {
    const fixture = TestBed.createComponent(CustomersComponent);
    const customer = fixture.componentInstance;
    expect(customer).toBeTruthy();
  })
);

  it(`should have as title 'customers'`, async(() => {
    const fixture = TestBed.createComponent(CustomersComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component.title).toEqual('customers');
}));
});
