import { TestBed, inject } from '@angular/core/testing';

import { GetColorsService } from './get-colors.service';

describe('GetColorsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetColorsService]
    });
  });

  it('should be created', inject([GetColorsService], (service: GetColorsService) => {
    expect(service).toBeTruthy();
  }));
});
