import { TestBed } from '@angular/core/testing';

import { ProductViaRestService } from './product-via-rest.service';

describe('ProductViaRestService', () => {
  let service: ProductViaRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductViaRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
