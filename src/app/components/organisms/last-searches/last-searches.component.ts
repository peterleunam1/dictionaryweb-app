import { Component, Input } from '@angular/core';
import { lastSearches } from 'src/app/models/pages/search.model';
import { empty } from 'src/app/constants/ui-texts';
import { animationSection } from 'src/app/models/constants/ui-texts.model';
@Component({
  selector: 'app-last-searches',
  templateUrl: './last-searches.component.html',
  styleUrls: ['./last-searches.component.scss'],
})
export class LastSearchesComponent {
  @Input() lastSearches: lastSearches[] = [];
  @Input() handleClear: () => void = () => {};
  empty: animationSection = empty;
}
