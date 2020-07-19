import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
	BreadcrumbModule,
	GridModule,
	ButtonModule,
	TabsModule,
} from 'carbon-components-angular';

import { HomeRoutingModule } from './home-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { discardPeriodicTasks } from '@angular/core/testing';


@NgModule({
	declarations: [LandingPageComponent],
	imports: [
		CommonModule,
		HomeRoutingModule,
		BreadcrumbModule,
		GridModule, ButtonModule, TabsModule
	]
})
export class HomeModule { }
