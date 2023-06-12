import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-purple-text',
  templateUrl: './purple-text.component.html',
  styleUrls: ['./purple-text.component.scss'],
})
export class PurpleTextComponent {
  @Input() isBold: boolean = false;
}
