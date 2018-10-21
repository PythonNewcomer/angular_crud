import { TestBed, async } from '@angular/core/testing';
import { ProductsComponent } from './products.component';
import { HttpClientModule } from '@angular/common/http';

describe('ProductsComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsComponent ],
      imports: [ HttpClientModule ],
      providers: [ HttpClientModule ],
    })
    .compileComponents();
  }));

  it('should create', async(() => {
    const fixture = TestBed.createComponent(ProductsComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  }));
});
