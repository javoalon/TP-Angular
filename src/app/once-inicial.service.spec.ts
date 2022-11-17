import { TestBed } from '@angular/core/testing';

import { OnceInicialService } from './once-inicial.service';

describe('OnceInicialService', () => {
  let service: OnceInicialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnceInicialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
