import { TestBed } from '@angular/core/testing';

import { MateriaABMService } from './materia-abm.service';

describe('MateriaABMService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MateriaABMService = TestBed.get(MateriaABMService);
    expect(service).toBeTruthy();
  });
});
