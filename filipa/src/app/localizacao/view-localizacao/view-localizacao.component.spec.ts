import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLocalizacaoComponent } from './view-localizacao.component';

describe('ViewLocalizacaoComponent', () => {
  let component: ViewLocalizacaoComponent;
  let fixture: ComponentFixture<ViewLocalizacaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewLocalizacaoComponent]
    });
    fixture = TestBed.createComponent(ViewLocalizacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
