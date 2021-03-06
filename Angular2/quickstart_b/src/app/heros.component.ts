import { Component, OnInit } from '@angular/core';
import { HeroClass} from './heroClass';

import { HeroService } from './hero.service';

// const squares = [1, 2, 3].map(function (x) { return x * x });
const squares = [1, 2, 3].map(x => x * x);

@Component({
  selector: 'my-heros',
  template: `
    <h1>{{title}}</h1>
    <h2>{{hero.name}} details!</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="hero.name" placeholder="name">
    </div>
    
    <h2>My Heros</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heros"
      [class.selected]="hero === selectedHero"
       (click)="onSelect(hero)">
        <!-- each hero goes here -->
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>

    <hero-detail-d [hero]="selectedHero"></hero-detail-d>
    `,
    styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `],
    providers: [HeroService]
})

export class HeroesComponent implements OnInit  {
  title = 'Tour of Heroes';
  hero: HeroClass = {id: 1, name: 'windstorm'};

  heros: HeroClass[];
  selectedHero: HeroClass;

  constructor(private heroService: HeroService){}

  getHeros(): void {
    this.heroService.getHeros().then(heros=>this.heros=heros);
    // this.heroService.getHeros().then(function(heros){ return this.heros=heros });
  }

  ngOnInit(): void{
    this.getHeros();
  }

  onSelect(hero:HeroClass): void {
    this.selectedHero = hero;
  }
}
