import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrmSumaComponent } from './frm-suma.component';

describe('FrmSumaComponent', () => {
  let component: FrmSumaComponent;
  let fixture: ComponentFixture<FrmSumaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrmSumaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrmSumaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
