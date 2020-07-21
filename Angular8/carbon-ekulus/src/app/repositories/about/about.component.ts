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

	phone_no = '';
	phone_no_list = [];

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

	savePHNumberHandler = () => {
		this.phone_no_list.push(this.phone_no);
		this.phone_no = '';
	};

	removePHNumberHandler = () => { 
		console.log('remove phone number');
	};
}
