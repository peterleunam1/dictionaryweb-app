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
  ],
  imports: [BrowserModule, AppRoutingModule, StoreModule.forRoot(STORE)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}