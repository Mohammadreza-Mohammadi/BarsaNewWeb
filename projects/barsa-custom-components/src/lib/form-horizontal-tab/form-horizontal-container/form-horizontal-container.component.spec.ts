import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHorizontalContainerComponent } from './form-horizontal-container.component';

describe('FormHorizontalContainerComponent', () => {
  let component: FormHorizontalContainerComponent;
  let fixture: ComponentFixture<FormHorizontalContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormHorizontalContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormHorizontalContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
