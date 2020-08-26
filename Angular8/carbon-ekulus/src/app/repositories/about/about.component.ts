import { Component, ViewChild, OnInit, TemplateRef } from '@angular/core';
import { TableModel, TableItem, TableHeaderItem } from 'carbon-components-angular';
import { FormBuilder, Form, Validators } from '@angular/forms';

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
	message = "Contact Us";
	dark = "dark";
	ibmButton = "primary";
	currentStep = 0;
	stepName = "About you";
	followFocus = true;
	isNavigation = false;
	cacheActive = false;
	offset = { x: -175, y: 0 };

	phone_no = '';
	phone_no_list = [];

	/* ngx autocomplete - gnaf address typeAhead */
	// https://suggestqueries.google.com/complete/search?q=fe&hl=en&ds=yt&xhr=t&client=youtube&callback=ng_jsonp_callback_0
	public search = "";

	public url = "http://suggestqueries.google.com/complete/search";
	public params = {
		hl: "en",
		ds: "yt",
		xhr: "t",
		client: "youtube"
	};

	public gnaf_url = "https://tst-api.afgonline.com.au/afg_ekulus_local/addresses";
	public gnaf_api = "http";
	public gnaf_term = "searchString";
	public gnaf_params = {
		limit: 20
	}
	/* ------------------------------------ */
	

	table_model = new TableModel();
	@ViewChild('linkTemplate', { static: true })
	protected linkTemplate: TemplateRef<any>;

	constructor(private fb: FormBuilder) { }

	contactForm = this.fb.group({
		autoAddress: [{ value: '', disabled: false }, []],
		phone_no: [{ value: '0033', disabled: false }, []],
		PersonFirstName: [{ value: '', disabled: false }, [Validators.required, Validators.min(1), Validators.max(50)]],
	});

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

	onContactFormSubmit = () => {
		console.log('submit');
	}

	onAddressChange = (val) => {
		console.log('change!' + val);
		if (val.length > 0) {
			//  
		}
	}

	handleResultSelected(result) {
		this.search = result;
	}
}
