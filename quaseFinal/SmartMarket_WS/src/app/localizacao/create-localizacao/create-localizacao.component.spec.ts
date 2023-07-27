import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLocalizacaoComponent } from './create-localizacao.component';

describe('CreateLocalizacaoComponent', () => {
  let component: CreateLocalizacaoComponent;
  let fixture: ComponentFixture<CreateLocalizacaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateLocalizacaoComponent]
    });
    fixture = TestBed.createComponent(CreateLocalizacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
