import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SwitchComponent } from './components/molecules/switch/switch.component';
import { LogoComponent } from './components/atoms/logo/logo.component';
import { DropDownComponent } from './components/atoms/drop-down/drop-down.component';
import { IconComponent } from './components/atoms/icon/icon.component';
import { HeaderComponent } from './components/organisms/header/header.component';
import { LayoutComponent } from './components/templates/layout/layout.component';
import { StoreModule } from '@ngrx/store';
import { STORE } from './states/app.state';
import { InputComponent } from './components/molecules/input/input.component';
import { PlayComponent } from './components/molecules/play/play.component';
import { PurpleTextComponent } from './components/atoms/purple-text/purple-text.component';
import { SeparatorComponent } from './components/atoms/separator/separator.component';
import { MainContentComponent } from './components/organisms/main-content/main-content.component';
import { MeaningsComponent } from './components/molecules/meanings/meanings.component';
import { DefinitionComponent } from './components/atoms/definition/definition.component';
import { SourceComponent } from './components/molecules/source/source.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './pages/search/search.component';
import { LoaderComponent } from './components/atoms/loader/loader.component';
import { MainSkeletonComponent } from './components/molecules/main-skeleton/main-skeleton.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SwitchComponent,
    LogoComponent,
    DropDownComponent,
    IconComponent,
    HeaderComponent,
    LayoutComponent,
    InputComponent,
    PlayComponent,
    PurpleTextComponent,
    SeparatorComponent,
    MainContentComponent,
    MeaningsComponent,
    DefinitionComponent,
    SourceComponent,
    SearchComponent,
    LoaderComponent,
    MainSkeletonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(STORE),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
