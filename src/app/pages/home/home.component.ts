import { Component } from '@angular/core';
import { lastSearches } from 'src/app/models/pages/search.model';
import { getLocalStorage } from 'src/app/utils/getLocalStorage';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  lastSearches: lastSearches[] = getLocalStorage('lastSearches').slice(0, 8);
  handleClear() {
    localStorage.removeItem('lastSearches');
    this.lastSearches = [];
  }
}
