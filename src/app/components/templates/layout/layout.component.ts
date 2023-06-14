import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { inputTexts } from 'src/app/constants/ui-texts';
import { regexs } from 'src/app/constants/regular-expressions.constants';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  keyword: string = '';
  placeholder: string = inputTexts.placeholder;
  regex: string = regexs.word;
  constructor(private router: Router) {}

  handleSubmit(e: Event) {
    e.preventDefault();
  }
  handleOuptChange(value: string) {
    this.keyword = value;
    this.router.navigate(['/search/', this.keyword]);
  }
}
