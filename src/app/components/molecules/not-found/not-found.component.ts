import { Component } from '@angular/core';
import { notFound } from 'src/app/constants/ui-texts';
import { animationSection } from 'src/app/models/constants/ui-texts.model';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent {
  notFound: animationSection = notFound;
}
