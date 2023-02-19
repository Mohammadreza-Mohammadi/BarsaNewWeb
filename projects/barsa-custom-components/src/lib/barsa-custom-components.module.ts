import {
  ComponentFactoryResolver,
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import {
  BarsaNovinRayCoreModule,
  BaseModule,
  DynamicComponentService,
} from 'barsa-novin-ray-core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
  FdDatetimeModule,
  FundamentalNgxCoreModule,
  TruncateModule,
} from '@fundamental-ngx/core';
import { BarsaSapUiModule } from 'barsa-sap-ui';

import { FormHorizontalTabComponent } from './form-horizontal-tab/form-horizontal-tab.component';
import { FormHorizontalTabItemsComponent } from './form-horizontal-tab/form-horizontal-tab-items/form-horizontal-tab-items.component';
import { MenuChildComponent } from './menu/menu-child/menu-child.component';

import { MenuComponent } from './menu/menu.component';
import { FormHorizontalContainerComponent } from './form-horizontal-tab/form-horizontal-container/form-horizontal-container.component';
import { UploadPersonalPictureComponent } from './upload-personal-picture/upload-personal-picture.component';
import { YearMonthDayComponent } from './year-month-day/year-month-day.component';
import { CdkTableModule } from '@angular/cdk/table';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { RecordListComponent } from './record-list/record-list.component';
import { UploadListOfPictureComponent } from './upload-list-of-picture/upload-list-of-picture.component';
import { SkeletonLoaderComponent } from './skeleton-loader/skeleton-loader.component';
import { SkeletonComponent } from './skeleton-loader/skeleton/skeleton.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { UploadFileCardComponent } from './upload-file/upload-file-card/upload-file-card.component';

const components = [
  FormHorizontalTabComponent,
  MenuChildComponent,
  UploadPersonalPictureComponent,
  YearMonthDayComponent,
  RecordListComponent,
  UploadListOfPictureComponent,
  SkeletonLoaderComponent,
  UploadFileComponent,
  UploadFileCardComponent,
];
@NgModule({
  declarations: [
    ...components,
    FormHorizontalTabItemsComponent,
    MenuComponent,
    FormHorizontalContainerComponent,
    SkeletonComponent,
  ],
  imports: [
    CommonModule,
    FundamentalNgxCoreModule,
    BarsaNovinRayCoreModule,
    BarsaSapUiModule,
    FormsModule,
    FdDatetimeModule,
    CdkTableModule,
    DragDropModule,
    TruncateModule,
  ],
  exports: [],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
})
export class BarsaCustomComponentsModule extends BaseModule {
  protected dynamicComponents = [...components];
  constructor(
    protected dcm: DynamicComponentService,
    protected cfr: ComponentFactoryResolver
  ) {
    super(dcm, cfr, 'BarsaCustomComponentsModule');
  }
}
