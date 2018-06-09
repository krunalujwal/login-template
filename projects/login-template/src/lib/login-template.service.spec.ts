import { TestBed, inject } from '@angular/core/testing';

import { LoginTemplateService } from './login-template.service';

describe('LoginTemplateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginTemplateService]
    });
  });

  it('should be created', inject([LoginTemplateService], (service: LoginTemplateService) => {
    expect(service).toBeTruthy();
  }));
});
