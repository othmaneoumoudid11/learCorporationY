import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDemSofAdmComponent } from './list-dem-sof-adm.component';

describe('ListDemSofAdmComponent', () => {
  let component: ListDemSofAdmComponent;
  let fixture: ComponentFixture<ListDemSofAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDemSofAdmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDemSofAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
