import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHorizontalTabItemsComponent } from './form-horizontal-tab-items.component';

describe('FormHorizontalTabItemsComponent', () => {
  let component: FormHorizontalTabItemsComponent;
  let fixture: ComponentFixture<FormHorizontalTabItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormHorizontalTabItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormHorizontalTabItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
