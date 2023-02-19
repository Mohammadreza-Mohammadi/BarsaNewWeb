import { Component, OnInit } from '@angular/core';
import {
  ReportViewBaseComponent,
  ReportViewColumn,
} from 'barsa-novin-ray-core';
import { UiTableViewSetting } from 'barsa-sap-ui/lib/models/grid-view';

@Component({
  selector: 'bcc-records-list',
  templateUrl: './record-list.component.html',
  styleUrls: ['./record-list.component.scss'],
})
export class RecordListComponent
  extends ReportViewBaseComponent<UiTableViewSetting>
  implements OnInit
{
  titleColumn: ReportViewColumn | undefined;
  test = {
    univercity: 'Guilan',
    city: 'rasht',
    type: 'roozane',
  };
  arrTitle: string[] = [];
  arrSubTitle: string[] = [];
  arrSubTitle3: string[] = [];

  ngOnInit(): void {
    super.ngOnInit();
    this.arrTitle = this.viewSetting.Title?.split(',');
    this.arrSubTitle = this.viewSetting.Subtitle1?.split(',');
    this.arrSubTitle = [
      ...this.arrSubTitle,
      ...this.viewSetting.Subtitle2?.split(','),
    ];

    this.arrSubTitle3 = this.viewSetting.Subtitle3?.split(',');

    this.titleColumn = this._findColumnByDbName.transform(
      this.allColumns,
      this.viewSetting.Title
    );
  }

  edit(mo, index) {
    this.rowClick.emit({ mo, index });
  }
}
