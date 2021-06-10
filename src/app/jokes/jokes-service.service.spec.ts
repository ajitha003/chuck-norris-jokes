import { TestBed } from '@angular/core/testing';

import { JokesServiceService } from './jokes-service.service';

describe('JokesServiceService', () => {
  let service: JokesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JokesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
