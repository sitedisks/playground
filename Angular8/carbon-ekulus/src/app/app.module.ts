import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

// carbon-components-angular default imports
import { UIShellModule } from 'carbon-components-angular';
import { Notification20Module } from '@carbon/icons-angular/lib/notification/20';
import { UserAvatar20Module } from '@carbon/icons-angular/lib/user--avatar/20';
import { AppSwitcher20Module } from '@carbon/icons-angular/lib/app-switcher/20';
import { NotificationNew20Module } from '@carbon/icons-angular/lib/notification--new/20';
import { Person20Module } from '@carbon/icons-angular/lib/person/20';
import { UserData16Module } from '@carbon/icons-angular/lib/user--data/16';
import { UserActivity16Module } from '@carbon/icons-angular/lib/user--activity/16';
import { InventoryManagement16Module } from '@carbon/icons-angular/lib/inventory-management/16';
import { Checkbox16Module } from '@carbon/icons-angular/lib/checkbox/16';
import { Add16Module } from '@carbon/icons-angular/lib/add/16';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		UIShellModule,
		Notification20Module,
		UserAvatar20Module,
		AppSwitcher20Module,
		NotificationNew20Module,
		Person20Module,
		UserData16Module,
		UserActivity16Module,
		InventoryManagement16Module,
		Checkbox16Module,
		Add16Module
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
