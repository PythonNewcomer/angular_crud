import { TestBed, async } from '@angular/core/testing';
import { CreateCustomerComponent } from './create-customer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('CreateCustomerComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCustomerComponent ],
      imports: [ HttpClientModule, RouterTestingModule, ReactiveFormsModule, FormsModule ],
      providers: [ HttpClientModule, RouterTestingModule ]
    })
    .compileComponents();
  }));

  it('should create', async(() => {
    const fixture = TestBed.createComponent(CreateCustomerComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  }));

  it(`should have as title 'createCustomer'`, async(() => {
    const fixture = TestBed.createComponent(CreateCustomerComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component.title).toEqual('createCustomer');
}));
});
