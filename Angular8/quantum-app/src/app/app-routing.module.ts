import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { AutoListComponent } from './auto-list/auto-list.component';


const routes: Routes = [
  { path: 'student/:id', component: StudentComponent },
  { path: 'auto', component: AutoListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
