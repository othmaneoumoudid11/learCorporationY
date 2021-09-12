import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUsersAdmComponent } from './list-users-adm.component';

describe('ListUsersAdmComponent', () => {
  let component: ListUsersAdmComponent;
  let fixture: ComponentFixture<ListUsersAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListUsersAdmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUsersAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
