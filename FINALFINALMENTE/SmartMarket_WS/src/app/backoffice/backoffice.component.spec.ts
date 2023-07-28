import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackofficeComponent } from './backoffice.component';

describe('BackofficeComponent', () => {
  let component: BackofficeComponent;
  let fixture: ComponentFixture<BackofficeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackofficeComponent]
    });
    fixture = TestBed.createComponent(BackofficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
