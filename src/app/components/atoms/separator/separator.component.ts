import { Component, Input } from '@angular/core';
import { orientations } from 'src/app/constants/ui-texts';
import { OrientationsModel } from 'src/app/models/constants/ui-texts.model';

@Component({
  selector: 'app-separator',
  templateUrl: './separator.component.html',
  styleUrls: ['./separator.component.scss'],
})
export class SeparatorComponent {
  @Input() orientation: string = orientations.vert;
  @Input() withText: boolean = false;
  ors: OrientationsModel = orientations;
}
