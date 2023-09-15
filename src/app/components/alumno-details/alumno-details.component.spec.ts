import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoDetailsComponent } from './alumno-details.component';

describe('AlumnoDetailsComponent', () => {
  let component: AlumnoDetailsComponent;
  let fixture: ComponentFixture<AlumnoDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlumnoDetailsComponent]
    });
    fixture = TestBed.createComponent(AlumnoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
