import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDemLicUserComponent } from './list-dem-lic-user.component';

describe('ListDemLicUserComponent', () => {
  let component: ListDemLicUserComponent;
  let fixture: ComponentFixture<ListDemLicUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDemLicUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDemLicUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
