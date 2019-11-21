import { TestBed } from '@angular/core/testing';

import { JwtUnAuthorizedInterceptorServiceService } from './jwt-un-authorized-interceptor-service.service';

describe('JwtUnAuthorizedInterceptorServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JwtUnAuthorizedInterceptorServiceService = TestBed.get(JwtUnAuthorizedInterceptorServiceService);
    expect(service).toBeTruthy();
  });
});
