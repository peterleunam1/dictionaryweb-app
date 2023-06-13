import { Component, Input } from '@angular/core';
import { KeywordMeaning } from 'src/app/models/pages/search.model';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
})
export class MainContentComponent {
  @Input() data: KeywordMeaning = {} as KeywordMeaning;
}
