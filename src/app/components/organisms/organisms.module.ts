import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LastSearchesComponent } from './last-searches/last-searches.component';
import { MainContentComponent } from './main-content/main-content.component';
import { AtomsModule } from '../atoms/atoms.module';
import { MoleculesModule } from '../molecules/molecules.module';

@NgModule({
  declarations: [HeaderComponent, LastSearchesComponent, MainContentComponent],
  imports: [CommonModule, AtomsModule, MoleculesModule],
  exports: [HeaderComponent, LastSearchesComponent, MainContentComponent],
})
export class OrganismsModule {}
