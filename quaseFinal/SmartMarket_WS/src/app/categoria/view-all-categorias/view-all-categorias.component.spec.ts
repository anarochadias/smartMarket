import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllCategoriasComponent } from './view-all-categorias.component';

describe('ViewAllCategoriasComponent', () => {
  let component: ViewAllCategoriasComponent;
  let fixture: ComponentFixture<ViewAllCategoriasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewAllCategoriasComponent]
    });
    fixture = TestBed.createComponent(ViewAllCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
