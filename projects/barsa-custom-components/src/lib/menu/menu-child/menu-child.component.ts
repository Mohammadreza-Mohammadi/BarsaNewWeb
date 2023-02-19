import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'bcc-menu-child',
  templateUrl: './menu-child.component.html',
  styleUrls: ['./menu-child.component.scss'],
})
export class MenuChildComponent {
  @Input() tab: any;
  @Output() selectedTabChanged = new EventEmitter<number>();
  @Input() selectedTabId;

  selectTab(id: number): void {
    this.selectedTabChanged.emit(id);
  }
}
