import { TestBed } from '@angular/core/testing';

import { PrintsService } from './history.service';

describe('PrintsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrintsService = TestBed.get(PrintsService);
    expect(service).toBeTruthy();
  });
});
