import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExperiencePageComponent } from './components/experience-page/experience-page.component';
import { ExperienceBoxComponent } from './components/experience-page/experience-box/experience-box.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DescriptionPageComponent } from './components/description-page/description-page.component';

import { AboutMeComponent } from './components/about-me/about-me.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    ExperiencePageComponent,
    ExperienceBoxComponent,
    DescriptionPageComponent,
    AboutMeComponent,
    PortfolioComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}