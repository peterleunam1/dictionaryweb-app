import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  keyword: string = '';
  constructor(private router: Router) {}

  handleSubmit(e: Event) {
    e.preventDefault();
  }

  handleOuptChange(value: string) {
    this.keyword = value;
    this.router.navigate(['/search/', this.keyword]);
  }
}
