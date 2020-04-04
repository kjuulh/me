import { SentryService } from "./service/sentry.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule, ErrorHandler } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HomeComponent } from "./pages/home/home.component";
import { HeaderComponent } from "./components/header/header.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { AboutComponent } from "./components/about/about.component";
import { BadgeComponent } from "./components/badge/badge.component";
import { CanvasComponent } from "./components/canvas/canvas.component";
import { MenuButtonComponent } from "./components/menu-button/menu-button.component";

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { SkillsComponent } from "./components/skills/skills.component";
import { ExperienceComponent } from "./components/experience/experience.component";
import { WorkComponent } from "./components/work/work.component";
import { ProjectComponent } from "./components/project/project.component";

import { LazyLoadImageModule, scrollPreset } from "ng-lazyload-image";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ProjectsComponent,
    NavbarComponent,
    AboutComponent,
    BadgeComponent,
    CanvasComponent,
    MenuButtonComponent,
    SkillsComponent,
    ExperienceComponent,
    WorkComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    LazyLoadImageModule.forRoot({
      preset: scrollPreset
    })
  ],
  providers: [{ provide: ErrorHandler, useClass: SentryService }],
  bootstrap: [AppComponent]
})
export class AppModule {}
