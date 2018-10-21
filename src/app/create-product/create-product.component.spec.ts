import { TestBed, async } from '@angular/core/testing';
import { CreateProductComponent } from './create-product.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('CreateProductComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateProductComponent ],
      imports: [ HttpClientModule, RouterTestingModule, ReactiveFormsModule, FormsModule ],
      providers: [ HttpClientModule, RouterTestingModule ]
    })
    .compileComponents();
  }));

  it('should create', async(() => {
    const fixture = TestBed.createComponent(CreateProductComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  }));

  it(`should have as title 'createProduct'`, async(() => {
    const fixture = TestBed.createComponent(CreateProductComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component.title).toEqual('createProduct');
}));
});
