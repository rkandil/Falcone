import { TestBed } from '@angular/core/testing';

import { ErrorService } from './error-service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('ErrorServiceService', () => {
  let service: ErrorService;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [HttpClient],
                                  imports: [HttpClientModule]});
    service = TestBed.inject(ErrorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
