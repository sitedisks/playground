import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepoPageComponent } from './repo-page/repo-page.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
	{
		path: '',
		component: RepoPageComponent
	},
	{
		path: 'about',
		component: AboutComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class RepositoriesRoutingModule { }
