import { Component, Input } from '@angular/core';
import { HeroClass } from './heroClass';

@Component({
  selector: 'hero-detail-d',
  template: `<div *ngIf="hero">
      <h2>{{hero.name}}</h2>
      <div>
        <label>id: </label>
        {{hero.id}}
      </div>
      <div>
        <label>name: </label>
         <input [(ngModel)]="hero.name" placeholder="name"/>
      </div>
    </div>`
})

export class HeroDetailComponent {
  @Input() hero: HeroClass;
}