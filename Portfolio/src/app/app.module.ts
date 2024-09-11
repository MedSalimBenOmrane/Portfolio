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
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectCardComponent } from './components/projects/project-card/project-card.component';
import { TestComponent } from './components/test/test.component';
import { SkillsListComponent } from './components/skills-list/skills-list.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { WhatIOfferComponent } from './components/what-i-offer/what-i-offer.component';
import { ListComponent } from './components/what-i-offer/list/list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ExperiencePageComponent,
    ExperienceBoxComponent,
    DescriptionPageComponent,
    AboutMeComponent,
    PortfolioComponent,
    ProjectsComponent,
    ProjectCardComponent,
    TestComponent,
    SkillsListComponent,
    ContactUsComponent,
    WhatIOfferComponent,
    ListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
