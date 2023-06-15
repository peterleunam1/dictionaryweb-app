import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { icon } from 'src/app/constants/icons.constant';
import { Icons } from 'src/app/models/constants/icons.model';
import { lastSearches } from 'src/app/models/pages/search.model';
import { AppStore } from 'src/app/models/states/store.model';
import { UpdateSearches } from 'src/app/states/actions/searches.action';
import { getLocalStorage } from 'src/app/utils/getLocalStorage';
import { getHours, getDays } from 'src/app/utils/getTimes';
@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.scss'],
})
export class WordComponent {
  @Input() word: string = '';
  @Input() date: Date = new Date();
  icons: Icons = icon;
  hours = getHours(this.date);
  day = getDays(this.date);

  constructor(private store: Store<AppStore>) {}

  handleDelete() {
    const data = getLocalStorage('lastSearches');
    const filtered = data.filter(
      (item: lastSearches) => item.keyowrd !== this.word
    );
    localStorage.setItem('lastSearches', JSON.stringify(filtered));
    this.store.dispatch(UpdateSearches());
  }
}
