import { Component, Input } from '@angular/core';
import { Meaning } from 'src/app/models/pages/search.model';

@Component({
  selector: 'app-meanings',
  templateUrl: './meanings.component.html',
  styleUrls: ['./meanings.component.scss'],
})
export class MeaningsComponent {
  @Input() meanings: Meaning[] = [];
}
