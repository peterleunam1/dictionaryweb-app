import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppStore } from 'src/app/models/states/store.model';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  @Input() size: string = 'large';
  theme$: Observable<string> = new Observable();
  constructor(private store: Store<AppStore>) {}

  getTheme() {
    this.theme$ = this.store.select((store: AppStore) => store.theme);
  }
  ngOnInit(): void {
    this.getTheme();
  }
}
