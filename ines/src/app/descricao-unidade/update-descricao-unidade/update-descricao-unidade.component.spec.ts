import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDescricaoUnidadeComponent } from './update-descricao-unidade.component';

describe('UpdateDescricaoUnidadeComponent', () => {
  let component: UpdateDescricaoUnidadeComponent;
  let fixture: ComponentFixture<UpdateDescricaoUnidadeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateDescricaoUnidadeComponent]
    });
    fixture = TestBed.createComponent(UpdateDescricaoUnidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
