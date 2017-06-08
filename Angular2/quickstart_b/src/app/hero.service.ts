import {Injectable} from '@angular/core';
import {HeroClass} from './heroClass';
import {HEROES} from './mock-heros';


@Injectable()
export class HeroService{
    getHeros():Promise<HeroClass[]>{
        return Promise.resolve(HEROES);
    }
}