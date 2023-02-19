import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadListOfPictureComponent } from './upload-list-of-picture.component';

describe('UploadListOfPictureComponent', () => {
  let component: UploadListOfPictureComponent;
  let fixture: ComponentFixture<UploadListOfPictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadListOfPictureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadListOfPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
