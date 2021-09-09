import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDemSofUserComponent } from './list-dem-sof-user.component';

describe('ListDemSofUserComponent', () => {
  let component: ListDemSofUserComponent;
  let fixture: ComponentFixture<ListDemSofUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDemSofUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDemSofUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
