import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-letter-animated',
  templateUrl: './letter-animated.component.html',
  styleUrls: ['./letter-animated.component.scss'],
})
export class LetterAnimatedComponent {
  @Input() letter: string = '';
  @Input() animation: string = '';
  @Input() color: boolean = false;
}
