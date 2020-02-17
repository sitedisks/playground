import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})

export class HerosComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService,
    private messageService: MessageService) { }

  getHeros(): void {
    // this.heroes = this.heroService.getHeroes();
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    console.log(this.selectedHero);
    this.messageService.add(`HeroService: Selected hero id=${hero.id}`);
    
  }

  add(name: string): void {
    name=name.trim();
    if(!name) {return;}
    this.heroService.addHero({name} as Hero)
      .subscribe(hero=> {this.heroes.push(hero);})
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h=>h!==hero);
    this.heroService.deleteHero(hero).subscribe();
  }

  // lifecycle hook
  ngOnInit(): void {
    this.getHeros();
  }

}
