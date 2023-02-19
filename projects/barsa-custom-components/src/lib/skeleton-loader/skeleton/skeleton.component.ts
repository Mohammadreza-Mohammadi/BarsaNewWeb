import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'bcc-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.scss'],
})
export class SkeletonComponent implements OnInit {
  @Input() type: 'LINE' | 'CIRCLE' | 'SQUARE' | 'RECTANGLE' | 'USER' = 'LINE';
  @Input() width: string;
  @Input() height: string;
  @Input() count: number = 1;
  @Input() shine: boolean = false;

  public defaultWidthTypes = {
    LINE: {
      width: '100%',
      height: '10px',
    },
    CIRCLE: {
      width: '50px',
      height: '50px',
    },
    SQUARE: {
      width: '60px',
      height: '60px',
    },
    RECTANGLE: {
      width: '100%',
      height: '80px',
    },
    USER: {
      width: '64px',
      height: '64px',
    },
  };

  public items = [];

  constructor() {}

  ngOnInit(): void {
    this.items.length = this.count;
  }
}
