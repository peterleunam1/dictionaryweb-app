import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { inputTexts } from 'src/app/constants/ui-texts';
import { regexs } from 'src/app/constants/regular-expressions.constants';
import { lastSearches } from 'src/app/models/pages/search.model';
import { getLocalStorage } from 'src/app/utils/getLocalStorage';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppStore } from 'src/app/models/states/store.model';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  keyword: string = '';
  placeholder: string = inputTexts.placeholder;
  regex: string = regexs.word;
  lastSearches: lastSearches[] = [];
  isChange$: Observable<boolean> = new Observable();
  constructor(private router: Router, private store: Store<AppStore>) {}
  handleSubmit(e: Event) {
    e.preventDefault();
  }
  handleOuptChange(value: string) {
    this.keyword = value;
    this.router.navigate(['/search/', this.keyword.toLocaleLowerCase()]);
  }
}
