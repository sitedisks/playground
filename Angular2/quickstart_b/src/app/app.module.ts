import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heros.component';
import { HeroService } from './hero.service';


@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    RouterModule.forRoot([
      {
        path: 'heros',
        component: HeroesComponent
      }
    ])
  ],
  declarations: [ AppComponent, HeroDetailComponent, HeroesComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
