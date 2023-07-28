import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescricaoUnidadeComponent } from './descricao-unidade.component';

describe('DescricaoUnidadeComponent', () => {
  let component: DescricaoUnidadeComponent;
  let fixture: ComponentFixture<DescricaoUnidadeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DescricaoUnidadeComponent]
    });
    fixture = TestBed.createComponent(DescricaoUnidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
