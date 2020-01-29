import { MaterialModule } from "./modules/material/material.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ProjectsComponent,
    NavbarComponent,
    AboutComponent,
    BadgeComponent,
    CanvasComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
