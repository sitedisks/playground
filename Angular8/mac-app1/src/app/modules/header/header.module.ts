import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';



@NgModule({
  declarations: [HeaderComponent], // Configure the selectors 
  imports: [ // Composing NgModules together
    CommonModule
  ],
  exports: [ // Making NgModules available to other parts of the app
    HeaderComponent
  ]
})
export class HeaderModule { }
