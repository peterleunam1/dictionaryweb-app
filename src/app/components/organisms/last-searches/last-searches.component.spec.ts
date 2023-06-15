import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastSearchesComponent } from './last-searches.component';

describe('LastSearchesComponent', () => {
  let component: LastSearchesComponent;
  let fixture: ComponentFixture<LastSearchesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LastSearchesComponent],
    });
    fixture = TestBed.createComponent(LastSearchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
