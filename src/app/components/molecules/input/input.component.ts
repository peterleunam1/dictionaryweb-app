import { Component, EventEmitter, Input, Output } from '@angular/core';

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

  handleChange(e: Event) {
    const value = (e.target as HTMLInputElement).value;
    this.OuptChange.emit(value);
  }
}
