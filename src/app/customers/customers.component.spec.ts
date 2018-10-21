import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { CustomersComponent } from './customers.component';
import { HttpClientModule } from '@angular/common/http';

describe('CustomersComponent', () => {
  let component: CustomersComponent;
  let fixture: ComponentFixture<CustomersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomersComponent ],
      imports: [ HttpClientModule ],
      providers: [ HttpClientModule ]
    })
    .compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', async(() => {
    expect(component).toBeTruthy();
  }));

  it(`should have as title 'customers'`, async(() => {
    component = fixture.debugElement.componentInstance;
    expect(component.title).toEqual('customers');
}));
});
