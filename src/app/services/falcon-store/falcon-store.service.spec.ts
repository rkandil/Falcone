import { TestBed } from '@angular/core/testing';

import { FalconStoreService } from './falcon-store.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('FalconStoreService', () => {
  let service: FalconStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient],
      imports: [HttpClientModule]
    });
    service = TestBed.inject(FalconStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
