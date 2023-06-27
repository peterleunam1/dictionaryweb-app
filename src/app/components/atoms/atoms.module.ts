import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefinitionComponent } from './definition/definition.component';
import { DropDownComponent } from './drop-down/drop-down.component';
import { IconComponent } from './icon/icon.component';
import { LetterAnimatedComponent } from './letter-animated/letter-animated.component';
import { LoaderComponent } from './loader/loader.component';
import { PurpleTextComponent } from './purple-text/purple-text.component';
import { SeparatorComponent } from './separator/separator.component';
import { RouterModule } from '@angular/router';
import { LogoComponent } from './logo/logo.component';

@NgModule({
  declarations: [
    DefinitionComponent,
    DropDownComponent,
    IconComponent,
    LetterAnimatedComponent,
    LoaderComponent,
    PurpleTextComponent,
    SeparatorComponent,
    LogoComponent,
  ],
  imports: [RouterModule, CommonModule],
  exports: [
    DefinitionComponent,
    DropDownComponent,
    IconComponent,
    LetterAnimatedComponent,
    LoaderComponent,
    PurpleTextComponent,
    SeparatorComponent,
    LogoComponent,
  ],
})
export class AtomsModule {}
