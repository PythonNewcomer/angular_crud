import { TestBed, async } from '@angular/core/testing';
import { UpdateCustomerComponent } from './update-customer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('UpdateCustomerComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCustomerComponent ],
      imports: [ HttpClientModule, RouterTestingModule, ReactiveFormsModule, FormsModule ],
      providers: [ HttpClientModule, RouterTestingModule ]
    })
    .compileComponents();
  }));

  it('should create', async(() => {
    const fixture = TestBed.createComponent(UpdateCustomerComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  }));

  it(`should have as title 'updateCustomer'`, async(() => {
    const fixture = TestBed.createComponent(UpdateCustomerComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component.title).toEqual('updateCustomer');
}));

  it('should render title in a h2 tag', async(() => {
    const fixture = TestBed.createComponent(UpdateCustomerComponent);
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Update customer');
  }));
  
});
