import { Component, Input } from '@angular/core';
import { icon } from 'src/app/constants/icons.constant';
@Component({
  selector: 'app-source',
  templateUrl: './source.component.html',
  styleUrls: ['./source.component.scss'],
})
export class SourceComponent {
  @Input() link: string = '';
  icon: string = icon.navigation;
}
