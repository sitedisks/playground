import { Injectable } from '@angular/core';
import {
  Plugins,
  CameraResultType,
  Capacitor,
  FilesystemDirectory,
  CameraPhoto,
  CameraSource,
  WebPlugin
} from '@capacitor/core';
import { Photo } from './photo';

const { Camera, Filesystem, Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})

export class PhotoService {

  public photos: Photo[] = [];

  constructor() { }

  public async addNewToGallery() {
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      // source: CameraSource.Camera,
      allowEditing: false,
      quality: 100
    });

    const savedImageFile = await this.savePicture(capturedPhoto);

    this.photos.unshift({
      filepath: "soon...",
      webviewPath: capturedPhoto.webPath
    });
  }

  private async savePicture(cameraPhoto: CameraPhoto) {

    const base64Data = await this.readAsBase64(cameraPhoto);

  }

  private async readAsBase64(cameraPhoto: CameraPhoto) {
    // fetch the photo, read as a blob, then convert to base64 format
    const response = await fetch(cameraPhoto.webPath);
    const blob = await response.blob();

    return await this.convertBlobToBase64(blob) as string;
  }

  convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject)=>{
    const reader = new FileReader;
    reader.onerror = reject;
    reader.onload =()=> {
      resolve(reader.result);
    };
    reader.readAsDataURL(blob);
  });

}
