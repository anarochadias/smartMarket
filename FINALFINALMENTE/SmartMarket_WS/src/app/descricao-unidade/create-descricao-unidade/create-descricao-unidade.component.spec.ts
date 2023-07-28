import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDescricaoUnidadeComponent } from './create-descricao-unidade.component';

describe('CreateDescricaoUnidadeComponent', () => {
  let component: CreateDescricaoUnidadeComponent;
  let fixture: ComponentFixture<CreateDescricaoUnidadeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateDescricaoUnidadeComponent]
    });
    fixture = TestBed.createComponent(CreateDescricaoUnidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
