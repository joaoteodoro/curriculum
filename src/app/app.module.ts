import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmploymentComponent } from './components/employment/employment.component';
import { SubTitleComponent } from './components/sub-title/sub-title.component';
import { EmploymentHistoryComponent } from './components/employment-history/employment-history.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DetailsComponent } from './components/details/details.component';
import { LinksComponent } from './components/links/links.component';
import { SkillComponent } from './components/skill/skill.component';
import { SkillsComponent } from './components/skills/skills.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    EmploymentComponent,
    SubTitleComponent,
    EmploymentHistoryComponent,
    ProfileComponent,
    DetailsComponent,
    LinksComponent,
    SkillComponent,
    SkillsComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
