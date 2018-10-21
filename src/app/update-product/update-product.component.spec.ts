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
});
