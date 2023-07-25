import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMarcaComponent } from './create-marca.component';

describe('CreateMarcaComponent', () => {
  let component: CreateMarcaComponent;
  let fixture: ComponentFixture<CreateMarcaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateMarcaComponent]
    });
    fixture = TestBed.createComponent(CreateMarcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
