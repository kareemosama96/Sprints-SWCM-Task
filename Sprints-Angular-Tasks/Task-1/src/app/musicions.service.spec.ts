import { TestBed } from '@angular/core/testing';

import { MusicionsService } from './musicions.service';

describe('MusicionsService', () => {
  let service: MusicionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MusicionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
