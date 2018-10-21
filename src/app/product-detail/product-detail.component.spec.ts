import { TestBed, async } from '@angular/core/testing';
import { ProductDetailComponent } from './product-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('ProductDetailComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDetailComponent ],
      imports: [ HttpClientModule, RouterTestingModule ],
      providers: [ HttpClientModule, RouterTestingModule ]
    })
    .compileComponents();
  }));

  it('should create', async(() => {
    const fixture = TestBed.createComponent(ProductDetailComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  }));

  it(`should have as title 'productDetail'`, async(() => {
    const fixture = TestBed.createComponent(ProductDetailComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component.title).toEqual('productDetail');
}));
});
