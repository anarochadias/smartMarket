import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCategoriaComponent } from './view-categoria.component';

describe('ViewCategoriaComponent', () => {
  let component: ViewCategoriaComponent;
  let fixture: ComponentFixture<ViewCategoriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewCategoriaComponent]
    });
    fixture = TestBed.createComponent(ViewCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
