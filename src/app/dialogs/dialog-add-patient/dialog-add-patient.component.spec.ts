import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddPatientComponent } from './dialog-add-patient.component';

describe('DialogAddPatientComponent', () => {
  let component: DialogAddPatientComponent;
  let fixture: ComponentFixture<DialogAddPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogAddPatientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogAddPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
