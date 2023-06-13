import { Component, EventEmitter, Input, Output } from '@angular/core';
import { icon } from 'src/app/constants/icons.constant';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() placeholder: string = '';
  @Input() regex: string = '';
  @Input() isRequired: boolean = false;
  @Output() OuptChange = new EventEmitter<string>();
  icon: string = icon.search;

  handleChange(e: Event) {
    const value = (e.target as HTMLInputElement).value;
    this.OuptChange.emit(value);
  }
}
