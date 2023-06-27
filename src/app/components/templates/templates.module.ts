import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { AtomsModule } from '../atoms/atoms.module';
import { MoleculesModule } from '../molecules/molecules.module';
import { OrganismsModule } from '../organisms/organisms.module';

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, AtomsModule, MoleculesModule, OrganismsModule],
  exports: [LayoutComponent],
})
export class TemplatesModule {}
