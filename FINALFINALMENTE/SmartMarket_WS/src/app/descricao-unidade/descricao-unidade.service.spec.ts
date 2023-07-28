import { TestBed } from '@angular/core/testing';

import { DescricaoUnidadeService } from './descricao-unidade.service';

describe('DescricaoUnidadeService', () => {
  let service: DescricaoUnidadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DescricaoUnidadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
