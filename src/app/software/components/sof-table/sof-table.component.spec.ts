import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SofTableComponent } from './sof-table.component';

describe('SofTableComponent', () => {
  let component: SofTableComponent;
  let fixture: ComponentFixture<SofTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SofTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SofTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
