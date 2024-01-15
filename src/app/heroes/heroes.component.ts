import { Component } from '@angular/core';
import { IHeroes } from '../interfaces/hero.interface';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent {
  public hero: IHeroes = {
    id: 0,
    name: 'Wolverine',
  };



}
