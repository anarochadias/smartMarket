import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllMarcasComponent } from './view-all-marcas.component';

describe('ViewAllMarcasComponent', () => {
  let component: ViewAllMarcasComponent;
  let fixture: ComponentFixture<ViewAllMarcasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewAllMarcasComponent]
    });
    fixture = TestBed.createComponent(ViewAllMarcasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
