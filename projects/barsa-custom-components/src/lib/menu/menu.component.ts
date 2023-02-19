import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  @Output() tabChanged = new EventEmitter<number>();
  @Input() tabs: any;
  @Input() selectedTabId: any;

  open: boolean = false;

  public onTabChanged(id: number) {
    this.tabChanged.emit(id);
  }
}
