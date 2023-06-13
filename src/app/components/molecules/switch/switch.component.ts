import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStore } from 'src/app/models/states/store.model';
import { themeConstants } from 'src/app/constants/theme.constant';
import { icon } from 'src/app/constants/icons.constant';
import { actionsHandler } from 'src/app/constants/actions-handler.constant';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
})
export class SwitchComponent {
  isActive = false;
  className: string = '';
  icon: string = icon.moon;
  constructor(private store: Store<AppStore>) {}

  setIsActive(): void {
    const { toggleTheme } = actionsHandler.theme;
    this.isActive = !this.isActive;
    this.className = this.isActive ? 'active' : '';
    this.icon = this.isActive ? icon.sun : icon.moon;
    this.store.dispatch({
      type: toggleTheme,
      theme: `${this.isActive ? themeConstants.dark : themeConstants.light}`,
    });
  }
}
