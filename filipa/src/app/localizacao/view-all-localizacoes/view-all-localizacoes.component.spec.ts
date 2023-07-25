import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllLocalizacoesComponent } from './view-all-localizacoes.component';

describe('ViewAllLocalizacoesComponent', () => {
  let component: ViewAllLocalizacoesComponent;
  let fixture: ComponentFixture<ViewAllLocalizacoesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewAllLocalizacoesComponent]
    });
    fixture = TestBed.createComponent(ViewAllLocalizacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
