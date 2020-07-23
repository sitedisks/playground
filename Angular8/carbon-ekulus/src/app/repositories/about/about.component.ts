import { Component, ViewChild, OnInit, TemplateRef } from '@angular/core';
import { TableModel, TableItem, TableHeaderItem } from 'carbon-components-angular';

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

	table_model = new TableModel();
	@ViewChild('linkTemplate', { static: true })
	protected linkTemplate: TemplateRef<any>;

	constructor() { }

	ngOnInit() {
		this.table_model.data = [
			[
				new TableItem({ data: "asdf" }),
				new TableItem({ data: { id: "1" }, template: this.linkTemplate }),
			],
			[
				new TableItem({ data: "csdf" }), 
				new TableItem({ data: { id: "2" }, template: this.linkTemplate }),
			],
			[
				new TableItem({ data: "bsdf" }), 
				new TableItem({ data: { id: "3" }, template: this.linkTemplate }),
			],
			[
				new TableItem({ data: "csdf" }), 
				new TableItem({ data: { id: "4" }, template: this.linkTemplate }),
			],
		];
		this.table_model.header = [
			new TableHeaderItem({ data: 'Next Step' }),
			new TableHeaderItem({ data: 'Select' })
		];
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
