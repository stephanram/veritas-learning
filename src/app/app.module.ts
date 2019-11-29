import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { TopBannerComponent } from './top-banner/top-banner.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FilterOptionComponent } from './filter-option/filter-option.component';
import { YearSliderComponent } from './year-slider/year-slider.component';
import { SearchNavTabComponent } from './search-nav-tab/search-nav-tab.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TopBannerComponent,
    FilterOptionComponent,
    YearSliderComponent,
    SearchNavTabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
