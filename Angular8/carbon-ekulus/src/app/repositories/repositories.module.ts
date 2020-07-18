import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepositoriesRoutingModule } from './repositories-routing.module';
import { RepoPageComponent } from './repo-page/repo-page.component';
import { AboutComponent } from './about/about.component';


@NgModule({
	declarations: [RepoPageComponent, AboutComponent],
	imports: [
		CommonModule,
		RepositoriesRoutingModule
	]
})
export class RepositoriesModule { }
