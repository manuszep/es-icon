import { ChangeDetectionStrategy, Component, input, Input, ViewEncapsulation } from '@angular/core';
import { IIcon } from './type';

@Component({
  selector: 'es-icon',
  templateUrl: './icon.html',
  styleUrls: ['./icon.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class IconComponent {
  protected name = input.required<IIcon>();
  protected color = input<string>();
}
