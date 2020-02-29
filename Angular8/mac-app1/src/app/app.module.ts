// modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HeaderModule } from './modules/header/header.module';
import { FooterModule } from './modules/footer/footer.module';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// components
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { FormTemplateComponent } from './form-template/form-template.component';
import { FormReactiveComponent } from './form-reactive/form-reactive.component';

// services
import { EmployeeService } from './employee.service';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    EmployeeListComponent,
    DepartmentListComponent,
    PageNotFoundComponent,
    DepartmentDetailComponent,
    FormTemplateComponent,
    FormReactiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    FooterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
