import { Component } from "@angular/core";
import { FaceSnape } from "../models/face-snap-models";
import { FaceSnapService } from "../service/face-snap.service";

@Component({
  selector: "app-face-snap-component-list",
  templateUrl: "./face-snap-component-list.component.html",
  styleUrls: ["./face-snap-component-list.component.scss"],
})
export class FaceSnapComponentListComponent {
  mySnaps!: FaceSnape[];
  constructor(private faceSnapService: FaceSnapService) {}
  ngOnInit() {
    this.mySnaps = this.faceSnapService.getAllFacesnaps();
  }
}
