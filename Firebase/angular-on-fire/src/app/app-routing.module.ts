import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './admin/login/login.component';
import { RegisterComponent } from './admin/register/register.component';
import { ProjectComponent } from './admin/project/project.component';
import { ForgotPasswordComponent } from './admin/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './admin/verify-email/verify-email.component';


const routes: Routes = [
  { path: 'admin/login', component: LoginComponent },
  { path: 'admin/register', component: RegisterComponent },
  { path: 'admin/forgot', component: ForgotPasswordComponent },
  { path: 'admin/verfiy', component: VerifyEmailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
