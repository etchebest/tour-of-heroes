import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IHero } from '../interfaces/hero.interface';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  async getAllHeroes():Promise<IHero[]> {
    const options = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = firstValueFrom(
      this.http.get<IHero[]>(`${this.baseUrl}/heroes`, options)
    );

    return response;
  }
}
