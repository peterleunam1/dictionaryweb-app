import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
import {
  KeywordMeaning,
  lastSearches,
} from 'src/app/models/pages/search.model';
import { MeaningService } from 'src/app/services/meaning/meaning.service';
import { getLocalStorage } from 'src/app/utils/getLocalStorage';
import { addSearchToLocalStorage } from 'src/app/utils/addSearchToLS';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  constructor(private service: MeaningService, private route: ActivatedRoute) {}

  response: KeywordMeaning[] = [];
  keyword$: Observable<string> = new Observable();

  isLoading: boolean = false;
  setIsLoading = (load: boolean) => {
    this.isLoading = load;
  };

  getSearchesByKeyword() {
    this.keyword$ = this.route.paramMap.pipe(
      map(params => params.get('query') || '')
    );

    this.keyword$.subscribe(keyword => {
      this.setIsLoading(true);
      this.service.getKeywordMeaning(keyword).subscribe({
        next: data => {
          this.response = data;
          addSearchToLocalStorage({
            keyowrd: keyword,
            date: new Date(),
          });
          this.setIsLoading(false);
        },
        error: () => {
          this.response = [];
          this.setIsLoading(false);
        },
      });
    });
  }

  ngOnInit(): void {
    this.getSearchesByKeyword();
  }
}
