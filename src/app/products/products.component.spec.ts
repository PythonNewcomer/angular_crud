import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { ProductsComponent } from './products.component';
import { HttpClientModule } from '@angular/common/http';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsComponent ],
      imports: [ HttpClientModule ],
      providers: [ HttpClientModule ],
    })
    .compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', async(() => {
    expect(component).toBeTruthy();
  }));

  it(`should have as title 'products'`, async(() => {
    component = fixture.debugElement.componentInstance;
    expect(component.title).toEqual('products');
  }));

  it('should have a title in a h1 tag', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('PRODUCTS');
  }));

});
