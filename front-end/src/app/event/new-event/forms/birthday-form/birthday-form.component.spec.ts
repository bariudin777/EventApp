import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthdayFormComponent } from './birthday-form.component';

describe('BirthdayFormComponent', () => {
  let component: BirthdayFormComponent;
  let fixture: ComponentFixture<BirthdayFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirthdayFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BirthdayFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
