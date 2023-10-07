import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizanswerComponent } from './quizanswer.component';

describe('QuizanswerComponent', () => {
  let component: QuizanswerComponent;
  let fixture: ComponentFixture<QuizanswerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizanswerComponent]
    });
    fixture = TestBed.createComponent(QuizanswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
