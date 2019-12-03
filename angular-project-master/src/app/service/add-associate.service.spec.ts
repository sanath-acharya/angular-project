import { TestBed } from '@angular/core/testing';

import { AddAssociateService } from './add-associate.service';

describe('AddAssociateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddAssociateService = TestBed.get(AddAssociateService);
    expect(service).toBeTruthy();
  });
});
