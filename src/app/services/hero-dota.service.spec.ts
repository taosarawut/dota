import { TestBed } from '@angular/core/testing';

import { HeroDotaService } from './hero-dota.service';

describe('HeroDotaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeroDotaService = TestBed.get(HeroDotaService);
    expect(service).toBeTruthy();
  });
});
