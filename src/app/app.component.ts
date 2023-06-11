import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AppStore } from './models/store.model';
import { Store } from '@ngrx/store';
import { Theme, TypographyName } from './models/theme.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  theme$: Observable<string> = new Observable();
  typography$: Observable<TypographyName['name']> = new Observable();
  constructor(private store: Store<AppStore>) {}

  getThemeAndTypography() {
    this.theme$ = this.store.select((store: AppStore) => store.theme);
    this.typography$ = this.store.select(
      (store: AppStore) => store.typography.name
    );
  }
  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit(): void {
    this.getThemeAndTypography();
  }
}
