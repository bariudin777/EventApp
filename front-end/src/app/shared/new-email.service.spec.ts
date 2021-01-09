import { TestBed } from '@angular/core/testing';

import { NewEmailService } from './new-email.service';

describe('NewEmailService', () => {
  let service: NewEmailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewEmailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
