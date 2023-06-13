import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppStore } from 'src/app/models/states/store.model';
import { Theme } from 'src/app/models/constants/theme.model';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
})
export class LogoComponent implements OnInit {
  theme$: Observable<string> = new Observable();
  constructor(private store: Store<AppStore>) {}
  getTheme() {
    this.theme$ = this.store.select((store: AppStore) => store.theme);
  }
  ngOnInit(): void {
    this.getTheme();
  }
}
