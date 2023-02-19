import { Injectable } from '@angular/core';
import {
  Observable,
  map,
  BehaviorSubject,
  combineLatest,
  tap,
  filter,
} from 'rxjs';
import { Menu } from '../interfaces/menu';
import { LayoutSetting } from 'barsa-novin-ray-core';

@Injectable({
  providedIn: 'root',
})
export class TabsService {
  private _tabsId: number = 0;
  private _tabs$ = new BehaviorSubject<LayoutSetting[] | null>(null);
  private _tabSelectedId$ = new BehaviorSubject<number>(1);
  public get tabSelectedId$(): Observable<number> {
    return this._tabSelectedId$.asObservable();
  }

  private _layout$ = new BehaviorSubject<LayoutSetting | null>(null);

  constructor() {
    this._layout$
      .pipe(
        filter((layout) => layout !== null),
        map((data) => this.convertToList(data?.items, 0)),
        tap((tabs) => this._tabs$.next(tabs))
      )
      .subscribe();
  }
  public get tabSelected$(): Observable<LayoutSetting | undefined> {
    return combineLatest([this.tabs$, this.tabSelectedId$]).pipe(
      filter(([tabs, id]) => tabs !== null),
      map(([tabs, id]) => {
        return (tabs as LayoutSetting[]).find((tab: any) => tab.tabId === id);
      })
    );
  }
  public get menu$(): Observable<Menu[]> {
    return this.tabs$.pipe(
      filter((tabs) => tabs !== null),
      map((tabs) => {
        return this.convertToMenu(tabs);
      })
    );
  }

  public get tabs$(): Observable<LayoutSetting[] | null> {
    return this._tabs$.asObservable();
  }

  public setLayout(layout) {
    this._layout$.next(layout);
  }

  public selectTab(id: number): void {
    this._tabSelectedId$.next(id);
  }

  private convertToMenu(items: any, id = 0) {
    return items
      .filter((item: any) => item.parentID === id)
      .map((item: any) => ({
        ...item,
        children: this.convertToMenu(items, item.tabId),
      }));
  }
  private convertToList(
    items: any,
    parent = 0,
    destination: any[] = []
  ): LayoutSetting[] {
    for (let item of items) {
      if (
        item.xtype === 'Ly.LayoutTabPage' &&
        item.Title &&
        item.TextVisible?.toString() !== 'false'
      ) {
        this._tabsId++;
        destination = [
          ...destination,
          {
            ...item,
            title: item.Title,
            tabId: this._tabsId,
            parentID: parent,
          },
        ];
      }

      if (
        item.items ||
        item.FieldUi?.Setting?.FormPanelSetting?.View?.Layout94?.items
      ) {
        destination = [
          ...destination,
          ...this.convertToList(
            item.items ||
              item.FieldUi?.Setting?.FormPanelSetting?.View?.Layout94?.items,
            (item.Type === 'LayoutGroup' && item.Title) ||
              item.FieldUi?.Setting?.FormPanelSetting?.View?.Layout94?.items
              ? this._tabsId
              : parent
          ),
        ];
      }
    }
    return destination;
  }
}
