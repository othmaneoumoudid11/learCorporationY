import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicTableComponent } from './lic-table.component';

describe('LicTableComponent', () => {
  let component: LicTableComponent;
  let fixture: ComponentFixture<LicTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LicTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
