import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSkeletonComponent } from './main-skeleton.component';

describe('MainSkeletonComponent', () => {
  let component: MainSkeletonComponent;
  let fixture: ComponentFixture<MainSkeletonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainSkeletonComponent],
    });
    fixture = TestBed.createComponent(MainSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
