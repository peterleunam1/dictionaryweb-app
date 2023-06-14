import { Component } from '@angular/core';
import { notFound } from 'src/app/constants/ui-texts';
@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent {
  message = notFound.message;
}
