import { Component, OnInit } from '@angular/core';
import { IHero } from '../interfaces/hero.interface';
import { HeroesService } from '../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  public heroes: IHero[] = [];
  public selectedHero?: IHero;

  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {
    this.initialize();
  }

  async initialize() {
    this.heroes = await this.heroesService.getAllHeroes();
  }

  onSelect(hero: IHero): void {
    this.selectedHero = hero;
  }
}
