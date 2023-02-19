import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadPersonalPictureComponent } from './upload-personal-picture.component';

describe('UploadPersonalPictureComponent', () => {
  let component: UploadPersonalPictureComponent;
  let fixture: ComponentFixture<UploadPersonalPictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadPersonalPictureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadPersonalPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
