import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDescricaoUnidadeComponent } from './view-descricao-unidade.component';

describe('ViewDescricaoUnidadeComponent', () => {
  let component: ViewDescricaoUnidadeComponent;
  let fixture: ComponentFixture<ViewDescricaoUnidadeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewDescricaoUnidadeComponent]
    });
    fixture = TestBed.createComponent(ViewDescricaoUnidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
