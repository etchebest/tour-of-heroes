import { Component, Input } from '@angular/core';
import { IHero } from '../interfaces/hero.interface';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
})
export class HeroDetailComponent {
  @Input() public hero?: IHero;
}
