import { Component, EventEmitter, Input, Output } from '@angular/core';
import { icon } from 'src/app/constants/icons.constant';
import { inputTexts } from 'src/app/constants/ui-texts';

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
  error: string = '';
  value: string = '';

  handleKeyUp(e: Event) {
    this.value = (e.target as HTMLInputElement).value;
    const regex = new RegExp(this.regex);
    !regex.test(this.value)
      ? (this.error = inputTexts.errorMessage)
      : (this.error = '');
  }
  handleChange() {
    !this.error && this.value && this.OuptChange.emit(this.value);
  }
}
