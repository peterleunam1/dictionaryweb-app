import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurpleTextComponent } from './purple-text.component';

describe('PurpleTextComponent', () => {
  let component: PurpleTextComponent;
  let fixture: ComponentFixture<PurpleTextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PurpleTextComponent],
    });
    fixture = TestBed.createComponent(PurpleTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
