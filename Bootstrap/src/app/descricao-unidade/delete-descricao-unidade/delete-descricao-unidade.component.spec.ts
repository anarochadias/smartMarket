import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDescricaoUnidadeComponent } from './delete-descricao-unidade.component';

describe('DeleteDescricaoUnidadeComponent', () => {
  let component: DeleteDescricaoUnidadeComponent;
  let fixture: ComponentFixture<DeleteDescricaoUnidadeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteDescricaoUnidadeComponent]
    });
    fixture = TestBed.createComponent(DeleteDescricaoUnidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
