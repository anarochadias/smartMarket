import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCategoriaComponent } from './update-categoria.component';

describe('UpdateCategoriaComponent', () => {
  let component: UpdateCategoriaComponent;
  let fixture: ComponentFixture<UpdateCategoriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateCategoriaComponent]
    });
    fixture = TestBed.createComponent(UpdateCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
