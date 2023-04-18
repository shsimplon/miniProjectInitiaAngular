import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FaceSnapComponentListComponent } from "./face-snap-component-list/face-snap-component-list.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { SigleFaceSnapComponent } from "./sigle-face-snap/sigle-face-snap.component";

const routes: Routes = [
  { path: "snaps/:id", component: SigleFaceSnapComponent },

  { path: "snaps", component: FaceSnapComponentListComponent },
  { path: "", component: LandingPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
