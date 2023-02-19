import { Component, OnInit } from '@angular/core';
import { UploadService } from 'barsa-novin-ray-core';
import { UiPictureFileComponent } from 'barsa-sap-ui';

@Component({
  selector: 'bcc-upload-pesonal-picture',
  templateUrl: './upload-personal-picture.component.html',
  styleUrls: ['./upload-personal-picture.component.scss'],
  providers: [UploadService],
})
export class UploadPersonalPictureComponent extends UiPictureFileComponent {
  ngOnInit(): void {
    super.ngOnInit();
  }
}
