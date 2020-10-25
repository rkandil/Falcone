import { TestBed } from '@angular/core/testing';

import { FalconStoreService } from './falcon-store.service';

describe('FalconStoreService', () => {
  let service: FalconStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FalconStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
