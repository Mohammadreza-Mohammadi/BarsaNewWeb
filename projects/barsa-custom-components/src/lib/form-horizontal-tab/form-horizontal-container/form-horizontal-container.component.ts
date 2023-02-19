import { Component, Input, OnInit } from '@angular/core';
import { LayoutSetting } from 'barsa-novin-ray-core';
import { Observable, pluck } from 'rxjs';
import { TabsService } from '../../services/tabs.service';

@Component({
  selector: 'bcc-form-horizontal-container',
  templateUrl: './form-horizontal-container.component.html',
  styleUrls: ['./form-horizontal-container.component.css'],
})
export class FormHorizontalContainerComponent implements OnInit {
  public tabs$: Observable<any[]>;
  public selectedTabId$: Observable<number>;
  public selectedTabItems$: Observable<any>;
  @Input() layout: LayoutSetting | null;

  public constructor(private tabsService: TabsService) {}

  ngOnInit(): void {
    this.tabsService.setLayout(this.layout);
    this.tabs$ = this.tabsService.menu$;
    this.selectedTabId$ = this.tabsService.tabSelectedId$;
    this.selectedTabItems$ = this.tabsService.tabSelected$;
  }

  public onTabChanged(e): void {
    this.tabsService.selectTab(e);
  }
}
