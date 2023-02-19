import { Component, OnInit } from '@angular/core';
import { UploadService } from 'barsa-novin-ray-core';
import { UiPicturesInfoComponent } from 'barsa-sap-ui';

@Component({
  selector: 'bcc-upload-list-of-picture',
  templateUrl: './upload-list-of-picture.component.html',
  styleUrls: ['./upload-list-of-picture.component.scss'],
  providers: [UploadService],
})
export class UploadListOfPictureComponent
  extends UiPicturesInfoComponent
  implements OnInit
{
  expanded = true;

  ngOnInit(): void {
    super.ngOnInit();
  }
}
