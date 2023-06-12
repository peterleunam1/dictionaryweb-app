import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
import { initalState } from 'src/app/constants/initial-state.constant';
import { KeywordMeaning } from 'src/app/models/search-model';
import { MeaningService } from 'src/app/services/meaning/meaning.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  constructor(private service: MeaningService, private route: ActivatedRoute) {}

  response: KeywordMeaning = initalState;
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
          this.setIsLoading(false);
        },
        error: () => {
          this.response = initalState;
          this.setIsLoading(false);
        },
      });
    });
  }
  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit(): void {
    this.getSearchesByKeyword();
  }
}
