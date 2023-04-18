import { Injectable } from "@angular/core";
import { FaceSnape } from "../models/face-snap-models";

@Injectable({
  // enregistre ce service à la racine de l'application;

  providedIn: "root",
})
export class FaceSnapService {
  mySnaps: FaceSnape[] = [
    {
      id: 1,
      title: "Archibald",
      description: "Mon meilleur ami depuis tout petit !",
      imageUrl:
        "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg",
      createdDate: new Date(),
      snaps: 0,
      location: "paris",
    },
    {
      id: 2,

      title: "Three Rock Mountain",
      description: "Un endroit magnifique pour les randonnées.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg",
      createdDate: new Date(),
      snaps: 200,
      location: "marseille",
    },
    {
      id: 3,

      title: "Un bon repas",
      description: "Mmmh que c'est bon !",
      imageUrl: "https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg",
      createdDate: new Date(),
      snaps: 134,
    },
  ];

  getAllFacesnaps(): FaceSnape[] {
    return this.mySnaps;
  }

  //chercher un faceSnap avec un id
  getfaceSnapById(faceSnapId: number): FaceSnape {
    const faceSnape = this.mySnaps.find((snap) => faceSnapId === snap.id);
    if (!faceSnape) {
      throw new Error("FaceSnap not found!");
    } else {
      return faceSnape;
    }
  }

  //incrementer le facesnap si il existe
  faceSnapById(faceSnapId: number, snapType: "snap" | "unsnap"): void {
    const faceSnap = this.getfaceSnapById(faceSnapId);

    snapType === "snap" ? faceSnap.snaps++ : faceSnap.snaps--;
  }
}
