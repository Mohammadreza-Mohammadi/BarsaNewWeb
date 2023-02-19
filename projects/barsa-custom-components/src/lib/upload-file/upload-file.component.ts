import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FileAttachmentInfo,
  getIcon,
  getImagePath,
  MetaobjectDataModel,
  PreventDefaulEvent,
  UploadService,
} from 'barsa-novin-ray-core';
import { UiPdfViewerComponent } from 'barsa-sap-ui';
import { BehaviorSubject, map, Observable, takeUntil, tap } from 'rxjs';
interface FileMapped extends MetaobjectDataModel {
  IsRequire: boolean;
  indexValue: number | null;
}
@Component({
  selector: 'bcc-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss'],
  providers: [UploadService],
})
export class UploadFileComponent
  extends UiPdfViewerComponent
  implements OnInit
{
  public lightBox: {
    open: boolean;
    src?: string;
  } = {
    open: false,
  };

  @ViewChild('uploader', { static: false })
  uploader;

  private selectedCardIndex: number = -1;
  filesMaped: FileMapped[] = [];
  compact: boolean;

  ngOnInit(): void {
    super.ngOnInit();
    this.compact = this.context.Setting.CustomUi.Parameters.Compact;
    this.filesMaped = this.context.Setting.CustomUi.Parameters.Files.MoDataList;
    this.filesMaped.forEach(
      (c, i) => (c.indexValue = i < this.value.length ? i : null)
    );
  }

  onDetele(event, indexValue: number, i: number) {
    PreventDefaulEvent(event);
    this._deleteFile(this.value[indexValue].Id, i);
  }
  onSave(event, indexValue: number) {
    PreventDefaulEvent(event);
    this._downloadFile(this.value[indexValue].Id);
  }
  onPreview(event, indexValue: number) {
    PreventDefaulEvent(event);
    this._openLightBox(this.value[indexValue].url);
  }
  onUpload(event, index: number) {
    this.selectedCardIndex = index;
    this.uploader.open();
  }

  protected _downloadFile(id: string) {
    this.context.fireEvent('CommandRequest', this.context, 'Download', id);
  }

  protected _setValue(value: any): void {
    if (this.selectedCardIndex !== -1) {
      this.filesMaped[this.selectedCardIndex].indexValue = value.length - 1;
      this.selectedCardIndex = -1;
    }
    super._setValue(value);
  }

  protected _openLightBox(url: string) {
    this.lightBox.open = true;
    this.lightBox.src = url;
  }

  protected _deleteFile(id: string, index: number) {
    this.filesMaped[index].indexValue = null;
    this.context.fireEvent('CommandRequest', this.context, 'Delete', id);
  }
}
