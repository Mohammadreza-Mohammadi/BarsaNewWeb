import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadFileCardComponent } from './upload-file-card.component';

describe('UploadFileCardComponent', () => {
  let component: UploadFileCardComponent;
  let fixture: ComponentFixture<UploadFileCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadFileCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadFileCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
