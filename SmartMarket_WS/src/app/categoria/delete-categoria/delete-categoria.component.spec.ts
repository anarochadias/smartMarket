import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCategoriaComponent } from './delete-categoria.component';

describe('DeleteCategoriaComponent', () => {
  let component: DeleteCategoriaComponent;
  let fixture: ComponentFixture<DeleteCategoriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteCategoriaComponent]
    });
    fixture = TestBed.createComponent(DeleteCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
