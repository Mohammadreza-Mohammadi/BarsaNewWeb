import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHorizontalTabComponent } from './form-horizontal-tab.component';

describe('FormHorizontalTabComponent', () => {
  let component: FormHorizontalTabComponent;
  let fixture: ComponentFixture<FormHorizontalTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormHorizontalTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormHorizontalTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
