import { TestBed } from '@angular/core/testing';

import { NorwayService } from './norway.service';

describe('NorwayService', () => {
  let service: NorwayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NorwayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
