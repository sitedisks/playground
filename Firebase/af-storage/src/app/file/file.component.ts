import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {

  url;
  constructor(private storage: AngularFireStorage) { }

  ngOnInit(): void {
    const filePath = 'put/001.jpg';
    const fileRef = this.storage.ref(filePath);
    fileRef.getDownloadURL().subscribe(url => {
      this.url = url;
      console.log(this.url);
    });
  }

}
