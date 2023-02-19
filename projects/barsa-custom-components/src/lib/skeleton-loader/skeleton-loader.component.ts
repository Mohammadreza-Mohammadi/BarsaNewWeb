import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'bcc-skeleton-loader',
  templateUrl: './skeleton-loader.component.html',
  styleUrls: ['./skeleton-loader.component.scss'],
})
export class SkeletonLoaderComponent {
  @Input() type;
  @Input() shine: boolean = false;
}
