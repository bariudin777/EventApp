import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendationPopupComponent } from './recommendation-popup.component';

describe('RecommendationPopupComponent', () => {
  let component: RecommendationPopupComponent;
  let fixture: ComponentFixture<RecommendationPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecommendationPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendationPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
