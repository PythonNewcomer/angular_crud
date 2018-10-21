import { TestBed } from '@angular/core/testing';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';

describe('DataService', () => {
  let dataService: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      providers: [DataService, HttpClientModule]
    });

    dataService = TestBed.get(DataService);
    });

  it('should be created', () => {
    expect(dataService).toBeTruthy();
  });
});
