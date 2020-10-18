import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

// carbon-components-angular default imports
import { UIShellModule } from 'carbon-components-angular';

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
	AddModule
} from '@carbon/icons-angular';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		UIShellModule,
		NotificationFilledModule, 
		UserAvatarModule,
		AppSwitcherModule,
		NotificationNewModule,
		PersonModule,
		UserDataModule,
		UserActivityModule,
		InventoryManagementModule,
		CheckboxCheckedModule,
		AddModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
