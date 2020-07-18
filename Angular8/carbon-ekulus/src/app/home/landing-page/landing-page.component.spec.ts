import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageComponent } from './landing-page.component';
import { BreadcrumbModule, GridModule } from "carbon-components-angular";

describe('LandingPageComponent', () => {
	let component: LandingPageComponent;
	let fixture: ComponentFixture<LandingPageComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [BreadcrumbModule, GridModule],
			declarations: [ LandingPageComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(LandingPageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
