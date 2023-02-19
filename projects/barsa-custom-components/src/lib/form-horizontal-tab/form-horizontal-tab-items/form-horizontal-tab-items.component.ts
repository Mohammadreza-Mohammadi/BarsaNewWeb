import { Component, Input } from '@angular/core';
import { LayoutSetting } from 'barsa-novin-ray-core';

@Component({
  selector: 'form-horizontal-tab-items',
  templateUrl: './form-horizontal-tab-items.component.html',
  styleUrls: ['./form-horizontal-tab-items.component.css'],
})
export class FormHorizontalTabItemsComponent {
  @Input() config: LayoutSetting;
}
