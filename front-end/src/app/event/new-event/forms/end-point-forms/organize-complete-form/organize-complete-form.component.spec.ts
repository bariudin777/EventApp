import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizeCompleteFormComponent } from './organize-complete-form.component';

describe('OrganizeCompleteFormComponent', () => {
  let component: OrganizeCompleteFormComponent;
  let fixture: ComponentFixture<OrganizeCompleteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizeCompleteFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizeCompleteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
