import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuChildComponent } from './menu-child.component';

describe('MenuChildComponent', () => {
  let component: MenuChildComponent;
  let fixture: ComponentFixture<MenuChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
