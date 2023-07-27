import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLocalizacaoComponent } from './update-localizacao.component';

describe('UpdateLocalizacaoComponent', () => {
  let component: UpdateLocalizacaoComponent;
  let fixture: ComponentFixture<UpdateLocalizacaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateLocalizacaoComponent]
    });
    fixture = TestBed.createComponent(UpdateLocalizacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
