import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicnicCompleteFormComponent } from './picnic-complete-form.component';

describe('PicnicCompleteFormComponent', () => {
  let component: PicnicCompleteFormComponent;
  let fixture: ComponentFixture<PicnicCompleteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PicnicCompleteFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PicnicCompleteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
