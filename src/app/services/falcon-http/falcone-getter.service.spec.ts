import { TestBed } from '@angular/core/testing';

import { FalconeGetterService } from './falcone-getter.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FalconStoreService } from '../falcon-store/falcon-store.service';
import { ErrorService } from '../errors/error-service.service';

describe('FalconeGetterService', () => {
  let service: FalconeGetterService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientModule], providers: [HttpClient, FalconStoreService, ErrorService]});
    service = TestBed.inject(FalconeGetterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
