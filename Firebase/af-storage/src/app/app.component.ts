import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'af-storage';

  constructor(private storage: AngularFireStorage) { }

  // uploading blobs
  // put(data)

  filePut(event) {
    const file = event.target.files[0];
    console.log(file.name);

    const filePath = 'put/' + file.name;
    const ref = this.storage.ref(filePath);
    const task = ref.put(file).then(
      res => {
        console.log(res);
      }, err => {
        console.log(err);
      }
    );
  }

  filePutString(event) {
    const file = event.target.files[0];

    let reader = new FileReader();
    reader.readAsBinaryString(file);

    reader.onloadend = () => {
      var b64_file = reader.result as string;
      var b64 = btoa(b64_file);
      console.log(b64);
    }
    // const base64_file = btoa(reader.result);
    // console.log(base64_file);

    // const filePath = 'putString/' + file.name;
    // const ref = this.storage.ref(filePath);
    // const task = ref.putString(base64_file).then(
    //   res => {
    //     console.log(res);
    //   }, err => {
    //     console.log(err);
    //   }
    // );
  }

  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
  fileUpload(event) {
    const file = event.target.files[0];
    const filePath = 'upload/' + file.name;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    // observe percentage changes
    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges().pipe(
      finalize(() => {
        this.downloadURL = fileRef.getDownloadURL();
      })
    ).subscribe();
  }

  devFileSelected(event) {
    let n = Date.now();
    const file = event.target.files[0];
    const filePath = `dev/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    task.snapshotChanges().pipe(
      finalize(() => {
        this.downloadURL = fileRef.getDownloadURL();
        this.downloadURL.subscribe(url => {
          console.log(url);
        });
      })
    ).subscribe(url => {
      if (url)
        console.log(url);
    });
  }


  selectedImage: any = null;
  url: string;
  id: string;
  file: string;

  mediumShow(event) {
    this.selectedImage = event.target.files[0];
  }

  mediumUpload() {
    let file = this.selectedImage;
    const filePath = 'medium/' + file.name;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    task.snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe((url) => {
          this.url = url;
        })
      })
    ).subscribe();
  }

  mediumView() {
    
  }
}
