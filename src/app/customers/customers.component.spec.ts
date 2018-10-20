import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomersComponent } from './customers.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('CustomersComponent', () => {
  let component: CustomersComponent;
  let fixture: ComponentFixture<CustomersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
      RouterTestingModule
    ],
      declarations: [ CustomersComponent ]
    })
    .compileComponents();
  }));


  it('should create', async(() => {
    const fixture = TestBed.createComponent(CustomersComponent);
    const customer = fixture.componentInstance;
    expect(customer).toBeTruthy();
  })
);

//   it(`should have as title 'customers'`, async(() => {
//     fixture = TestBed.createComponent(CustomersComponent);
//     component = fixture.debugElement.componentInstance;
//     expect(component.getTitle()).toEqual('customers');
// }));
});
