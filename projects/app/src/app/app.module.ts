import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HammerModule } from '@angular/platform-browser';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import '@ui5/webcomponents/dist/DurationPicker.js';
import '@ui5/webcomponents/dist/DatePicker.js';
import '@ui5/webcomponents/dist/DateTimePicker.js';
import '@ui5/webcomponents/dist/DateRangePicker.js';

import '@ui5/webcomponents-localization/dist/features/calendar/Persian';
import '@ui5/webcomponents-theme-base/dist/Assets.js';
import '@ui5/webcomponents-fiori/dist/Assets.js';
import { BarsaNovinRayCoreModule, RootPortalComponent, APP_VERSION } from 'barsa-novin-ray-core';
import { BarsaSapUiModule, BarsaSapUiRoutingModule } from 'barsa-sap-ui';
import { BarsaKanbanModule } from 'barsa-kanban';
import { BarsaTilesModule } from 'barsa-tiles';
import { BarsaDevelopComponentsModule } from 'barsa-develop-components';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HammerModule,
    BarsaNovinRayCoreModule.forRoot(),
    BarsaSapUiModule.forRoot(),
    BarsaSapUiRoutingModule,
    BarsaDevelopComponentsModule,
    BarsaKanbanModule,
    BarsaTilesModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
        enabled: environment.production,
        registrationStrategy: 'registerWhenStable:30000'
    })

  ],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
  providers: [{ provide: APP_VERSION, useValue: environment.appVersion }],
  exports: [],
  bootstrap: [RootPortalComponent],
})
export class AppModule {}
