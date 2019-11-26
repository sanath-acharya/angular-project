import { TestBed } from '@angular/core/testing';

import { AssociateSkillServiceService } from './associate-skill-service.service';

describe('AssociateSkillServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AssociateSkillServiceService = TestBed.get(AssociateSkillServiceService);
    expect(service).toBeTruthy();
  });
});
