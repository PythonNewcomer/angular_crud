import { TestBed, async } from '@angular/core/testing';
import { CustomerDetailComponent } from './customer-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('CustomerDetailComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerDetailComponent ],
      imports: [ HttpClientModule, RouterTestingModule ],
      providers: [ HttpClientModule, RouterTestingModule ]
    })
    .compileComponents();
  }));

  it('should create', async(() => {
    const fixture = TestBed.createComponent(CustomerDetailComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  }));

  it(`should have as title 'customerDetail'`, async(() => {
    const fixture = TestBed.createComponent(CustomerDetailComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component.title).toEqual('customerDetail');
}));

  it('should have a title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(CustomerDetailComponent);
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('CUSTOMER DETAILS');
  }));
});
