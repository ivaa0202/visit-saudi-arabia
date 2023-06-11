import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MainNavbarComponent } from './main-page/main-navbar/main-navbar.component';
import { ExperienceComponent } from './main-page/experience/experience.component';
import { AuthenticallyComponent } from './main-page/authentically/authentically.component';
import { ExploreComponent } from './main-page/explore/explore.component';
import { TipsComponent } from './main-page/tips/tips.component';
import { EndComponent } from './main-page/end/end.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MainNavbarComponent,
    ExperienceComponent,
    AuthenticallyComponent,
    ExploreComponent,
    TipsComponent,
    EndComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
