import { TestBed } from '@angular/core/testing';

import { FalconeGetterService } from './falcone-getter.service';

describe('FalconeGetterService', () => {
  let service: FalconeGetterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FalconeGetterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
