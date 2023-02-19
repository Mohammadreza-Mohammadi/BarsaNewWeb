import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearMonthDayComponent } from './year-month-day.component';

describe('YearMonthDayComponent', () => {
  let component: YearMonthDayComponent;
  let fixture: ComponentFixture<YearMonthDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YearMonthDayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YearMonthDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
