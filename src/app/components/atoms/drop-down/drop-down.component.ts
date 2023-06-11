import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { typographies } from 'src/app/constants/typography';
import { AppStore } from 'src/app/models/store.model';
import { TypographyName } from 'src/app/models/theme.model';
@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss'],
})
export class DropDownComponent {
  public typographies = typographies;
  value: TypographyName['name'] = 'Epilogue';

  constructor(private store: Store<AppStore>) {}

  onChange(value: Event): void {
    this.value = (value.target as HTMLInputElement)
      .value as TypographyName['name'];
    this.store.dispatch({
      type: '[Typography] Set Typography',
      typography: { name: this.value },
    });
  }
}
