import { Component, OnChanges, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { lastSearches } from 'src/app/models/pages/search.model';
import { AppStore } from 'src/app/models/states/store.model';
import { getLocalStorage } from 'src/app/utils/getLocalStorage';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  lastSearches: lastSearches[] = [];
  isChange$: Observable<boolean> = new Observable();

  constructor(private store: Store<AppStore>) {}
  handleClear() {
    localStorage.removeItem('lastSearches');
    this.lastSearches = [];
  }
  updateLastSearches() {
    this.isChange$ = this.store.select((store: AppStore) => store.searches);
    this.isChange$.subscribe(() => {
      this.lastSearches = getLocalStorage('lastSearches').slice(0, 7);
    });
  }
  ngOnInit() {
    this.updateLastSearches();
  }
}
