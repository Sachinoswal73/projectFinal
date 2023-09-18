import { TestBed } from '@angular/core/testing';

import { TimerObservService } from './timer-observ.service';

describe('TimerObservService', () => {
  let service: TimerObservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimerObservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
