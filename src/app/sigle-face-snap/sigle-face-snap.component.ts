import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FaceSnape } from "../models/face-snap-models";
import { FaceSnapService } from "../service/face-snap.service";

@Component({
  selector: "app-sigle-face-snap",
  templateUrl: "./sigle-face-snap.component.html",
  styleUrls: ["./sigle-face-snap.component.scss"],
})
export class SigleFaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnape;
  constructor(
    private faceSnapService: FaceSnapService,
    private route: ActivatedRoute
  ) {}

  buttonText!: string;
  ngOnInit() {
    this.buttonText = "Oh Snap!";
    //+ convertir en number
    const snapId = +this.route.snapshot.params["id"];
    this.faceSnap = this.faceSnapService.getfaceSnapById(snapId);
  }

  onSnap() {
    if (this.buttonText === "Oh Snap!") {
      this.faceSnapService.faceSnapById(this.faceSnap.id, "snap");
      this.buttonText = "Oops, unSnap!";
    } else {
      this.faceSnapService.faceSnapById(this.faceSnap.id, "unsnap");
      this.buttonText = "Oh Snap!";
    }
  }
}
