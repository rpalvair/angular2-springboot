import {Component} from '@angular/core';
import {Hero} from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroListComponent } from './hero-list.component';

@Component({
    selector: 'my-app',
    template: 
    `<h1>{{title}}</h1>
    <h2>My Heroes</h2>
    <hero-list (emitHero)="handleEvent($event)"></hero-list>
    <my-hero-detail [hero]="selectedHero"></my-hero-detail>`,
    directives: [HeroDetailComponent, HeroListComponent]
})
export class AppComponent {
    public title:string = 'Tour of heroes';
    public selectedHero:Hero;
    handleEvent(hero:Hero) { this.selectedHero = hero;}
 }

