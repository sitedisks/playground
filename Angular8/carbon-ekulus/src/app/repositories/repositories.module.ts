import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
	GridModule,
	ButtonModule,
	BreadcrumbModule, 
	ComboBoxModule, 
	DropdownModule,  
	TableModule, 
	ModalModule, 
	InputModule, 
	NotificationModule,
	TilesModule,
	DialogModule,
	PlaceholderModule,
	PaginationModule,
	RadioModule,
	SelectModule,
	DatePickerModule,
	ProgressIndicatorModule,
	TabsModule
} from 'carbon-components-angular';

import { RepositoriesRoutingModule } from './repositories-routing.module';
import { RepoPageComponent } from './repo-page/repo-page.component';
import { AboutComponent } from './about/about.component';
import { Add16Module } from '@carbon/icons-angular/lib/add/16';
import { RadioButton16Module } from '@carbon/icons-angular/lib/radio-button/16';
import { DotMark16Module } from '@carbon/icons-angular/lib/dot-mark/16';
import { Edit16Module } from '@carbon/icons-angular/lib/edit/16';
import { EditOff16Module } from '@carbon/icons-angular/lib/edit--off/16';
import { CheckmarkFilled16Module } from '@carbon/icons-angular/lib/checkmark--filled/16';
import { StarFilled16Module } from '@carbon/icons-angular/lib/star--filled/16';


@NgModule({
	declarations: [RepoPageComponent, AboutComponent],
	imports: [
		CommonModule,
		RepositoriesRoutingModule,
		GridModule,
		ButtonModule,
		BreadcrumbModule, 
		ComboBoxModule, 
		DropdownModule,  
		TableModule, 
		ModalModule, 
		InputModule, 
		NotificationModule,
		TilesModule,
		DialogModule,
		PlaceholderModule,
		PaginationModule,
		RadioModule,
		SelectModule,
		DatePickerModule,
		ProgressIndicatorModule,
		TabsModule,
		Add16Module,
		RadioButton16Module,
		DotMark16Module,
		Edit16Module,
		EditOff16Module,
		CheckmarkFilled16Module,
		StarFilled16Module
	]
})
export class RepositoriesModule { }
