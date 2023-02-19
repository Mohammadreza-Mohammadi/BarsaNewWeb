import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FileAttachmentInfo } from 'barsa-novin-ray-core';
import { SkeletonsTypes } from '../../emums/sketonsTypes';

@Component({
  selector: 'bcc-upload-file-card',
  templateUrl: './upload-file-card.component.html',
  styleUrls: ['./upload-file-card.component.scss'],
})
export class UploadFileCardComponent {
  public SkeletonsTypes = SkeletonsTypes;

  @Input() value: FileAttachmentInfo;
  @Input() skeleton: string;
  @Input() title: string;
  @Input() isRequire: boolean;
  @Input() compact: boolean;

  @Output() delete = new EventEmitter<any>();
  @Output() save = new EventEmitter<any>();
  @Output() preview = new EventEmitter<any>();
  @Output() upload = new EventEmitter<any>();

  get filename() {
    return this.value.FileName;
  }
  get icon() {
    return this.value.Icon;
  }
  get id() {
    return this.value.Id;
  }
  onDetele($event) {
    this.delete.emit($event);
  }

  onSave($event) {
    this.save.emit($event);
  }

  onPreview($event) {
    this.preview.emit($event);
  }

  onUpload($event) {
    this.upload.emit($event);
  }
}
