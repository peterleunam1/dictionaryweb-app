import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterAnimatedComponent } from './letter-animated.component';

describe('LetterAnimatedComponent', () => {
  let component: LetterAnimatedComponent;
  let fixture: ComponentFixture<LetterAnimatedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LetterAnimatedComponent],
    });
    fixture = TestBed.createComponent(LetterAnimatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
