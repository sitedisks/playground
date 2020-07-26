import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about.component';
import {
	GridModule,
	ButtonModule,
	BreadcrumbModule,
	ComboBoxModule,
	DropdownModule,
	TableModule,
	ModalModule,
	InputModule,
	StructuredListModule,
	NotificationModule,
	SearchModule,
	TilesModule,
	DialogModule,
	PlaceholderModule,
	PaginationModule,
	RadioModule,
	SelectModule,
	CheckboxModule,
	DatePickerModule,
	ProgressIndicatorModule,
	TabsModule
} from 'carbon-components-angular';

describe('AboutComponent', () => {
	let component: AboutComponent;
	let fixture: ComponentFixture<AboutComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				FormsModule,
				BreadcrumbModule, 
				GridModule, 
				ButtonModule, 
				TabsModule,
				ComboBoxModule,
				DropdownModule,
				TableModule,
				ModalModule,
				InputModule,
				StructuredListModule,
				NotificationModule,
				SearchModule,
				TilesModule,
				DialogModule,
				PlaceholderModule,
				PaginationModule,
				RadioModule,
				SelectModule,
				CheckboxModule,
				DatePickerModule,
				ProgressIndicatorModule,],
			declarations: [AboutComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AboutComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
