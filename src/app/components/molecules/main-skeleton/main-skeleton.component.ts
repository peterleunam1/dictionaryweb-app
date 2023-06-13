import { Component } from '@angular/core';
import { sizes } from 'src/app/constants/sizes.constant';
import { Sizes } from 'src/app/models/constants/sizes.model';

@Component({
  selector: 'app-main-skeleton',
  templateUrl: './main-skeleton.component.html',
  styleUrls: ['./main-skeleton.component.scss'],
})
export class MainSkeletonComponent {
  sizes: Sizes = sizes;
}
