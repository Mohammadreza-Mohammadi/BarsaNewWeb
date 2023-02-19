import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormPropsBaseComponent } from 'barsa-novin-ray-core';

@Component({
  selector: 'bcc-form-horizontal-tab',
  templateUrl: './form-horizontal-tab.component.html',
  styleUrls: ['./form-horizontal-tab.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormHorizontalTabComponent
  extends FormPropsBaseComponent
  implements OnInit
{
  ngOnInit(): void {
    super.ngOnInit();
  }

  onWindowScroll(event) {
    console.log('event', event);
  }
}
