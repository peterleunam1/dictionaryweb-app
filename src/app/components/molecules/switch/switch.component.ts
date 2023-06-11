import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStore } from 'src/app/models/store.model';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
})
export class SwitchComponent {
  isActive = false;
  className: string = '';
  icon: string = 'fa-regular fa-moon';
  constructor(private store: Store<AppStore>) {}

  setIsActive(): void {
    this.isActive = !this.isActive;
    this.className = this.isActive ? 'active' : '';
    this.icon = this.isActive ? 'fa-regular fa-sun' : 'fa-regular fa-moon';
    this.store.dispatch({
      type: '[Theme] Toggle Theme',
      theme: `${this.isActive ? 'dark' : 'light'}`,
    });
  }
}
