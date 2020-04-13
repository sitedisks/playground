import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  selectedFil: File = null;

  constructor(private storage: AngularFireStorage) { }

  ngOnInit(): void {
  }

  onFileSelected(event) {
    var n = Date.now();
    const file = event.target.files[0];
    const filePath = `RoomsImages/${n}`;
    const fileRef = this.storage.ref(filePath);
    this.storage.upload(filePath, file)
      .snapshotChanges()
      .pipe();
  }
}
