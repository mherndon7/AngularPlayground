import { Component, OnInit } from '@angular/core';
import { Hero } from '../interfaces/hero';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule, FormsModule, HeroDetailComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css',
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHero?: Hero;

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  private getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
}
