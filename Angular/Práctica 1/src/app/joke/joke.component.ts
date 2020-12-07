import { Component, OnInit, Input } from '@angular/core';
import { Joke } from 'src/app/class/joke';

@Component({
    selector: 'app-joke',
    templateUrl: './joke.component.html',
    styleUrls: ['./joke.component.css']
})

export class JokeComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {}

    @Input('joke') data: Joke;
}