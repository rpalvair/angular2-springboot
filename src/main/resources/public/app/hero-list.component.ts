import { Component, Input, Output, EventEmitter} from '@angular/core';
import {Hero} from './hero';

@Component({
  selector: 'hero-list',
  template: `
  <ul class="heroes">
      <li *ngFor="let hero of heroes" 
      [class.selected]="hero === selectedHero"
      (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    `
})
export class HeroListComponent {
    @Input()
    selectedHero: Hero;

    @Output()
    emitHero = new EventEmitter<Hero>();

    public heroes = HEROES;

    onSelect(hero: Hero) { this.emitHero.emit(hero); }
}

const HEROES: Hero[] = [
      { id: 1, name: 'Mr. Nice' },
      { id: 2, name: 'Narco' },
      { id: 3, name: 'Bombasto' },
      { id: 4, name: 'Celeritas' },
      { id: 5, name: 'Magneta' },
      { id: 6, name: 'RubberMan' },
      { id: 7, name: 'Dynama' },
      { id: 8, name: 'Dr IQ' },
      { id: 9, name: 'Magma' },
      { id: 10, name: 'Tornado' }
    ];