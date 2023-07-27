import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCategoriaComponent } from './create-categoria.component';

describe('CreateCategoriaComponent', () => {
  let component: CreateCategoriaComponent;
  let fixture: ComponentFixture<CreateCategoriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateCategoriaComponent]
    });
    fixture = TestBed.createComponent(CreateCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
