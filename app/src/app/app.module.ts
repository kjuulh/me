import { BrowserModule } from "@angular/platform-browser";
import { NgModule, ErrorHandler, APP_INITIALIZER } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
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
import { SentryService } from "./service/sentry.service";
import { ContactComponent } from "./components/contact/contact.component";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { ConfigService } from "./service/config.service";
import { AppConfig } from "./models/app.config";

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
    ProjectComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: "serverApp" }),
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
    LazyLoadImageModule.forRoot({
      preset: scrollPreset,
    }),
  ],
  providers: [
    { provide: ErrorHandler, useClass: SentryService },
    ConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: (configService: ConfigService) => configService.initApp(),

      multi: true,
      deps: [ConfigService],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
