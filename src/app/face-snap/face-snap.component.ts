import { Component, Input, OnInit } from "@angular/core";
import { FaceSnape } from "../models/face-snap-models";
import { FaceSnapService } from "../service/face-snap.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-face-snap",
  templateUrl: "./face-snap.component.html",
  styleUrls: ["./face-snap.component.scss"],
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnape;
  constructor(
    private faceSnapService: FaceSnapService,
    private router: Router
  ) {}

  buttonText!: string;
  ngOnInit() {
    this.buttonText = "Oh Snap!";
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
  onViewFaceSnap() {
    this.router.navigateByUrl(`snaps/${this.faceSnap.id}`);
  }
}
