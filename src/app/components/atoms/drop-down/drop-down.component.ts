import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { typographies } from 'src/app/constants/typography.constant';
import { AppStore } from 'src/app/models/states/store.model';
import { TypographyName } from 'src/app/models/constants/theme.model';
import { actionsHandler } from 'src/app/constants/actions-handler.constant';

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
    const { setTypography } = actionsHandler.typography;
    this.value = (value.target as HTMLInputElement)
      .value as TypographyName['name'];
    this.store.dispatch({
      type: setTypography,
      typography: { name: this.value },
    });
  }
}
