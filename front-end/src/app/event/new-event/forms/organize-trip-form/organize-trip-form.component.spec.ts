import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizeTripFormComponent } from './organize-trip-form.component';

describe('OrganizeTripFormComponent', () => {
  let component: OrganizeTripFormComponent;
  let fixture: ComponentFixture<OrganizeTripFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizeTripFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizeTripFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
