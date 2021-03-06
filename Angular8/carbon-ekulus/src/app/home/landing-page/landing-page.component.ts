import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-landing-page',
	templateUrl: './landing-page.component.html',
	styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

	message = 'Landing';
	followFocus: true;
	isNavigation: false;
	cacheActive: true;

	modal1_on = false;
	modal2_on = false;

	constructor() { }

	ngOnInit() {
	}

}
