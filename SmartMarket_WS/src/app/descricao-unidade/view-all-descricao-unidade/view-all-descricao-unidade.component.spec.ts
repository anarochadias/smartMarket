import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllDescricaoUnidadeComponent } from './view-all-descricao-unidade.component';

describe('ViewAllDescricaoUnidadeComponent', () => {
  let component: ViewAllDescricaoUnidadeComponent;
  let fixture: ComponentFixture<ViewAllDescricaoUnidadeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewAllDescricaoUnidadeComponent]
    });
    fixture = TestBed.createComponent(ViewAllDescricaoUnidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
