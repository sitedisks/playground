import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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

import { RepositoriesRoutingModule } from './repositories-routing.module';
import { RepoPageComponent } from './repo-page/repo-page.component';
import { AboutComponent } from './about/about.component';
import { 
	NotificationFilledModule, 
	UserAvatarModule,
	AppSwitcherModule,
	NotificationNewModule,
	PersonModule,
	UserDataModule,
	UserActivityModule,
	InventoryManagementModule,
	CheckboxCheckedModule,
	AddModule,
	DeleteModule,
	EditModule
} from '@carbon/icons-angular';

@NgModule({
	declarations: [RepoPageComponent, AboutComponent],
	imports: [
		FormsModule,
		ReactiveFormsModule,
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
		TabsModule,
		NotificationFilledModule, 
		UserAvatarModule,
		AppSwitcherModule,
		NotificationNewModule,
		PersonModule,
		UserDataModule,
		UserActivityModule,
		InventoryManagementModule,
		CheckboxCheckedModule,
		AddModule,
		DeleteModule,
		EditModule
	]
})
export class RepositoriesModule { }
