import { TestBed, async } from '@angular/core/testing';
import { UpdateProductComponent } from './update-product.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('UpdateProductComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateProductComponent ],
      imports: [ HttpClientModule, RouterTestingModule, ReactiveFormsModule, FormsModule ],
      providers: [ HttpClientModule, RouterTestingModule ]
    })
    .compileComponents();
  }));

  it('should create', async(() => {
    const fixture = TestBed.createComponent(UpdateProductComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  }));

  it(`should have as title 'updateProduct'`, async(() => {
    const fixture = TestBed.createComponent(UpdateProductComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component.title).toEqual('updateProduct');
}));

  it('should render title in a h2 tag', async(() => {
    const fixture = TestBed.createComponent(UpdateProductComponent);
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Update product');
  }));
});
