import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDemLicAdmComponent } from './list-dem-lic-adm.component';

describe('ListDemLicAdmComponent', () => {
  let component: ListDemLicAdmComponent;
  let fixture: ComponentFixture<ListDemLicAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDemLicAdmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDemLicAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
