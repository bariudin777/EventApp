import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRecommendationsComponent } from './modal-recommendations.component';

describe('ModalRecommendationsComponent', () => {
  let component: ModalRecommendationsComponent;
  let fixture: ComponentFixture<ModalRecommendationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalRecommendationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalRecommendationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
