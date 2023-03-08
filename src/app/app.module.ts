import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { ResponsiveDirective } from './directives/responsive.directive';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { PersonalInformationComponent } from './components/personal-information/personal-information.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    ResponsiveDirective,
    EducationComponent,
    ExperienceComponent,
    PersonalInformationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
