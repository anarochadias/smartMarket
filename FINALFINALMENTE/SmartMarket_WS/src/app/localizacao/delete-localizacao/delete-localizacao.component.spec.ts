import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteLocalizacaoComponent } from './delete-localizacao.component';

describe('DeleteLocalizacaoComponent', () => {
  let component: DeleteLocalizacaoComponent;
  let fixture: ComponentFixture<DeleteLocalizacaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteLocalizacaoComponent]
    });
    fixture = TestBed.createComponent(DeleteLocalizacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
