import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthdayCompleteFormComponent } from './birthday-complete-form.component';

describe('BirthdayCompleteFormComponent', () => {
  let component: BirthdayCompleteFormComponent;
  let fixture: ComponentFixture<BirthdayCompleteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirthdayCompleteFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BirthdayCompleteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
