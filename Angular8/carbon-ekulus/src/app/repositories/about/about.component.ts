import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
	message = "Contact Us";
	ibmButton = "primary";
	currentStep = 0;
	stepName = "About you";
	followFocus = true;
	isNavigation = false;
	cacheActive = false;
	offset = { x: -175, y: 0 };

	constructor() { }

	ngOnInit() {
	}

	stepSelected(event) {
		this.currentStep = event.index;
		this.stepName = event.step.text;
	}

	takeResidenceHandler = (e) => {
		console.log('Taking residence');
	}

}
