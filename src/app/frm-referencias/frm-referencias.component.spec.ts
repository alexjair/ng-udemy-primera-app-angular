import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrmReferenciasComponent } from './frm-referencias.component';

describe('FrmReferenciasComponent', () => {
  let component: FrmReferenciasComponent;
  let fixture: ComponentFixture<FrmReferenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrmReferenciasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrmReferenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
