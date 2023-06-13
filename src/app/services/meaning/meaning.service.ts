import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { KeywordMeaning } from 'src/app/models/pages/search.model';
import { BASE_URL } from 'src/app/constants/base-url.constant';

@Injectable({
  providedIn: 'root',
})
export class MeaningService {
  constructor(private http: HttpClient) {}

  getKeywordMeaning(keyword: string): Observable<KeywordMeaning[]> {
    return this.http.get<KeywordMeaning[]>(BASE_URL + `/${keyword}`).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error.message);
      })
    );
  }
}
