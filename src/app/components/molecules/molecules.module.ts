import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { MainSkeletonComponent } from './main-skeleton/main-skeleton.component';
import { MeaningsComponent } from './meanings/meanings.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PlayComponent } from './play/play.component';
import { SourceComponent } from './source/source.component';
import { SwitchComponent } from './switch/switch.component';
import { WordComponent } from './word/word.component';
import { AtomsModule } from '../atoms/atoms.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    InputComponent,
    MainSkeletonComponent,
    MeaningsComponent,
    NotFoundComponent,
    PlayComponent,
    SourceComponent,
    SwitchComponent,
    WordComponent,
  ],
  imports: [CommonModule, AtomsModule, RouterModule],
  exports: [
    InputComponent,
    MainSkeletonComponent,
    MeaningsComponent,
    NotFoundComponent,
    PlayComponent,
    SourceComponent,
    SwitchComponent,
    WordComponent,
  ],
})
export class MoleculesModule {}
