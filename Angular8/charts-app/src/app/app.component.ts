import { Component, OnInit } from '@angular/core';
import { ShareService } from '@ngx-share/core';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'charts-app';

  faFacebook = faFacebook;

  constructor(public share: ShareService) { }

  ngOnInit() {

  }
}
