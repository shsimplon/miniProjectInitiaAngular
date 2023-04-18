import { LOCALE_ID, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { FaceSnapComponent } from "./face-snap/face-snap.component";
import { registerLocaleData } from "@angular/common";
import * as fr from "@angular/common/locales/fr";
import { FaceSnapComponentListComponent } from "./face-snap-component-list/face-snap-component-list.component";
import { HeaderComponent } from "./header/header.component";
import { AppRoutingModule } from "./app-routing.module";
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SigleFaceSnapComponent } from './sigle-face-snap/sigle-face-snap.component';

@NgModule({
  declarations: [
    AppComponent,
    FaceSnapComponent,
    FaceSnapComponentListComponent,
    HeaderComponent,
    LandingPageComponent,
    SigleFaceSnapComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [{ provide: LOCALE_ID, useValue: "fr-FR" }],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default);
  }
}
