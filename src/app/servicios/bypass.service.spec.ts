import { TestBed } from '@angular/core/testing';

import { BypassService } from './bypass.service';

describe('BypassService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BypassService = TestBed.get(BypassService);
    expect(service).toBeTruthy();
  });
});
