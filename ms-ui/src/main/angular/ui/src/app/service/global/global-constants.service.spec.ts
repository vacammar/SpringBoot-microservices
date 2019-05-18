import { TestBed } from '@angular/core/testing';

import { GlobalConstantsService } from './global-constants.service';

describe('GlobalConstantsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GlobalConstantsService = TestBed.get(GlobalConstantsService);
    expect(service).toBeTruthy();
  });
});
